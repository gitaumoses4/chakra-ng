import { Directive, ElementRef, inject, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { StylesService } from "../styles";
import { BehaviorSubject, of, Subscription } from "rxjs";
import { QuillarProps } from "./types";
import { getStylesId } from "./system";

@Directive()
export abstract class BaseStyledDirective implements OnInit, OnDestroy, OnChanges {
  protected readonly elementRef = inject(ElementRef);
  private readonly styleService = inject(StylesService);

  private readonly baseSubscriptions: Subscription[] = [];

  protected readonly $styles = new BehaviorSubject<QuillarProps>(this.getStyles() || {});

  ngOnInit() {
    this.baseSubscriptions.push(
      this.styleService.applyQuillarStyles(getStylesId(this.constructor.name), this.$styles, this.elementRef.nativeElement),
    );
  }

  public applyQuillarStyles(styles: QuillarProps, element: HTMLElement) {
    return this.styleService.applyQuillarStyles(getStylesId(this.constructor.name), of(styles), element);
  }

  ngOnDestroy() {
    this.baseSubscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnChanges() {
    this.$styles.next(this.getStyles() || {});
  }

  public abstract getStyles(): QuillarProps | null | undefined;
}
