import { Directive, ElementRef, inject, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { StylesService } from "../../styles";
import { combineLatest, map, mergeMap, Observable, of } from "rxjs";
import { ChakraStyles } from "../types";
import { getStylesId } from "../system";
import { BaseDirective } from "./base.directive";

@Directive()
export abstract class BaseStyledDirective extends BaseDirective implements OnInit, OnDestroy, OnChanges {
  public readonly elementRef = inject(ElementRef);
  public readonly styleService = inject(StylesService);

  ngOnInit() {
    const $styles = this.$chakraStyles.pipe(
      mergeMap((chakraStyles) => combineLatest([this.getBaseStyles(), of(chakraStyles)])),
      map(([baseStyles, chakraStyles]) => ({ ...chakraStyles, ...baseStyles })),
    );

    this.addSubscription(this.styleService.applyChakraStyles(getStylesId(this.constructor.name), $styles, this.elementRef.nativeElement));
  }

  public applyChakraStyles(styles: ChakraStyles, element: HTMLElement) {
    return this.styleService.applyChakraStyles(getStylesId(this.constructor.name), of(styles), element);
  }

  public abstract getBaseStyles(): Observable<ChakraStyles>;
}
