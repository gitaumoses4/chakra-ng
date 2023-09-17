import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { QuillarProps, QuillarStyleObject } from "./types";
import { BehaviorSubject, Subscription } from "rxjs";

@Component({ template: "", standalone: true })
export abstract class BaseComponent implements OnInit, OnDestroy {
  public readonly $styles = new BehaviorSubject<QuillarProps>({});
  protected readonly $customStyles = new BehaviorSubject<QuillarStyleObject>({});

  protected styleSubscription: Subscription | undefined;

  @Input() public classes: string | string[] | Set<string> | { [klass: string]: any } = {};

  @Input() public set qStyles(styles: QuillarStyleObject) {
    this.$customStyles.next(styles);
  }

  ngOnInit() {
    this.$styles.next({ __css: this.defaultStyles() });
    this.styleSubscription = this.$customStyles.subscribe((customStyles) => {
      this.$styles.next({ __css: this.defaultStyles(), sx: customStyles });
    });
  }

  public abstract defaultStyles(): QuillarStyleObject;

  public ngOnDestroy() {
    if (this.styleSubscription) {
      this.styleSubscription.unsubscribe();
    }
  }
}
