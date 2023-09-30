import { Component, Input, OnInit } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { SystemStyleObject } from "@chakra-ui/styled-system";
import { ChakraStyles } from "../types";
import { BaseDirective } from "./base.directive";

@Component({ template: "", standalone: true })
export abstract class BaseChakraComponent extends BaseDirective implements OnInit {
  public abstract readonly $baseStyles: Observable<SystemStyleObject>;
  public readonly $styles = new BehaviorSubject<ChakraStyles>({});

  @Input() public className: string | string[] | Set<string> | { [klass: string]: any } = {};

  ngOnInit() {
    this.addSubscription(
      combineLatest([this.$baseStyles, this.$chakraStyles]).subscribe(([baseStyles, chakraStyles]) => {
        this.$styles.next({ ...chakraStyles, __css: baseStyles });
      }),
    );
  }
}
