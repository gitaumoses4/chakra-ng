import { Directive, ElementRef, inject, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { StylesService } from "../styles";
import { BehaviorSubject, Subscription } from "rxjs";
import { QuillarStyles } from "./types";
import { getStylesId } from "./system";

@Directive()
export abstract class BaseStyledDirective<ThemeComponent extends string = string> implements OnInit, OnDestroy, OnChanges {
  protected readonly elementRef = inject(ElementRef);
  private readonly styleService = inject(StylesService);

  private readonly baseSubscriptions: Subscription[] = [];

  protected readonly $styles = new BehaviorSubject<QuillarStyles>(this.getStyles() || {});

  ngOnInit() {
    this.baseSubscriptions.push(
      this.styleService.applyQuillarStyles(getStylesId(this.constructor.name), this.$styles, this.elementRef.nativeElement),
    );
  }

  ngOnDestroy() {
    this.baseSubscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnChanges() {
    this.$styles.next(this.getStyles() || {});
  }

  public abstract getStyles(): QuillarStyles | null | undefined;
}
