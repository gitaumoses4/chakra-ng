import { Directive, ElementRef, inject, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { StylesService } from "../styles";
import { BehaviorSubject, Subscription } from "rxjs";
import { QuillarStyles } from "./types";

@Directive()
export abstract class BaseStyledDirective implements OnInit, OnChanges, OnDestroy {
  private readonly elementRef = inject(ElementRef);
  private readonly styleService = inject(StylesService);

  private readonly $styles = new BehaviorSubject<QuillarStyles>(this.getStyles() || {});
  private readonly baseSubscriptions: Subscription[] = [];

  ngOnInit() {
    const id = this.getStylesId();
    this.baseSubscriptions.push(this.styleService.applyQuillarStyles(id, this.$styles, this.elementRef.nativeElement));
  }

  private getStylesId() {
    let hash = 5381;
    const className = this.constructor.name;
    let index = className.length;

    while (index) {
      hash = (hash * 33) ^ className.charCodeAt(--index);
    }

    return (hash >>> 0).toString(16);
  }

  ngOnChanges() {
    this.$styles.next(this.getStyles() || {});
  }

  public abstract getStyles(): QuillarStyles | null | undefined;

  ngOnDestroy() {
    this.baseSubscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
