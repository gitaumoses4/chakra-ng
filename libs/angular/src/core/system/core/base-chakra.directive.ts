import { Directive, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { combineLatest, map, mergeMap, Observable, of } from "rxjs";
import { BaseChakraStyles, ChakraStyles } from "../types";
import { ChakraElement } from "./chakra.element";

@Directive()
export abstract class BaseChakraDirective extends ChakraElement implements OnInit, OnDestroy, OnChanges {
  ngOnInit() {
    const $styles = this.$chakraStyles.pipe(
      mergeMap((chakraStyles) => combineLatest([this.getBaseStylesObservable(), of(chakraStyles)])),
      map(([baseStyles, chakraStyles]) => ({ ...baseStyles, ...chakraStyles })),
    );

    this.applyChakraStyles($styles);
  }

  private getBaseStylesObservable(): Observable<ChakraStyles> {
    const baseStyles = this.getBaseStyles();
    return (baseStyles instanceof Observable ? baseStyles : of(baseStyles)).pipe(map((styles) => styles || {}));
  }

  public abstract getBaseStyles(): Observable<BaseChakraStyles> | BaseChakraStyles;
}
