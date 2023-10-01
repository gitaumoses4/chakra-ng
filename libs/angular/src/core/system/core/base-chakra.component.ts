import { Component, Input, OnInit } from "@angular/core";
import { BehaviorSubject, combineLatest, map, Observable } from "rxjs";
import { BaseChakraStyles, ChakraStyles } from "../types";
import { ChakraElement } from "./chakra.element";

@Component({ template: "", standalone: true })
export abstract class BaseChakraComponent extends ChakraElement implements OnInit {
  public readonly $styles = new BehaviorSubject<ChakraStyles>({});
  @Input() public className: string | string[] | Set<string> | { [klass: string]: any } = {};

  ngOnInit() {
    this.addSubscription(
      combineLatest([this.getBaseStylesObservable(), this.$chakraStyles]).subscribe(([baseStyles, chakraStyles]) => {
        this.$styles.next({ ...baseStyles, ...chakraStyles });
      }),
    );

    if (this.applyStylesOnHost()) {
      this.applyChakraStyles(this.$styles);
    }
  }

  private getBaseStylesObservable() {
    const baseStyles = this.getBaseStyles();
    return (baseStyles instanceof Observable ? baseStyles : new BehaviorSubject(baseStyles)).pipe(map((styles) => styles || {}));
  }

  public abstract getBaseStyles(): Observable<BaseChakraStyles> | BaseChakraStyles;

  public applyStylesOnHost(): boolean {
    return true;
  }
}
