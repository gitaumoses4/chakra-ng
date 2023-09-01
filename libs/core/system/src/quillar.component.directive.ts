import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { QuillarStyles } from "./types";
import { toCSSObject } from "./system";
import { css } from "@emotion/css";
import { ThemeService } from "@quillar/config";

@Directive({ selector: "[qStyles]" })
export class QuillarComponentDirective implements OnInit {
  @Input() qStyles: QuillarStyles = {};

  constructor(private readonly elementRef: ElementRef, private readonly themeService: ThemeService) {}

  ngOnInit() {
    const styleObject = toCSSObject(this.themeService.getTheme())(this.qStyles);

    const className = css(styleObject);

    this.elementRef.nativeElement.classList.add(className);
  }
}
