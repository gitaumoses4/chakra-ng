import { Directive, ElementRef, inject, Input, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { StylesService } from "../styles";
import { BehaviorSubject, map, of, Subscription } from "rxjs";
import { ChakraStyles } from "./types";
import { getStylesId } from "./system";

@Directive()
export abstract class BaseStyledDirective implements OnInit, OnDestroy, OnChanges {
  protected readonly elementRef = inject(ElementRef);
  private readonly styleService = inject(StylesService);

  private readonly baseSubscriptions: Subscription[] = [];

  protected readonly $styles = new BehaviorSubject<ChakraStyles>(this.getStyles() || {});

  @Input() public chakraStyles: ChakraStyles | null = null;

  ngOnInit() {
    const styles = this.$styles.pipe(map((styles) => ({ ...styles, ...(this.chakraStyles || {}) })));

    this.baseSubscriptions.push(this.styleService.applyChakraStyles(getStylesId(this.constructor.name), styles, this.elementRef.nativeElement));
  }

  public applyChakraStyles(styles: ChakraStyles, element: HTMLElement) {
    return this.styleService.applyChakraStyles(getStylesId(this.constructor.name), of(styles), element);
  }

  ngOnDestroy() {
    this.baseSubscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnChanges() {
    this.$styles.next(this.getStyles() || {});
  }

  public abstract getStyles(): ChakraStyles;
}
