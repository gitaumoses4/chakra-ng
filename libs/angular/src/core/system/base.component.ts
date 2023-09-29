import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { SystemStyleObject } from "@chakra-ui/styled-system";
import { ChakraStyles } from "./types";

@Component({ template: "", standalone: true })
export abstract class BaseComponent implements OnInit, OnDestroy {
  protected readonly $customStyles = new BehaviorSubject<SystemStyleObject>({});

  public readonly $styles = new BehaviorSubject<ChakraStyles>({});

  protected styleSubscription: Subscription | undefined;

  @Input() public className: string | string[] | Set<string> | { [klass: string]: any } = {};

  @Input() public set chakraStyles(styles: SystemStyleObject) {
    this.$customStyles.next(styles);
  }

  ngOnInit() {
    this.$styles.next({ __css: this.defaultStyles() });
    this.styleSubscription = this.$customStyles.subscribe((customStyles) => {
      this.$styles.next({ __css: this.defaultStyles(), sx: customStyles });
    });
  }

  public abstract defaultStyles(): SystemStyleObject;

  public ngOnDestroy() {
    if (this.styleSubscription) {
      this.styleSubscription.unsubscribe();
    }
  }
}
