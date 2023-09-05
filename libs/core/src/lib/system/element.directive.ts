import { Directive, ElementRef, Input, OnChanges, OnInit } from "@angular/core";
import { QuillarStyles } from "./types";
import { StylesService } from "../styles";
import { toCSSObject } from "./system";
import { ThemeService } from "../theme";

@Directive({ selector: "[qStyles]" })
export class ElementDirective implements OnInit, OnChanges {
  @Input() public qStyles: QuillarStyles = {};

  constructor(private readonly elementRef: ElementRef, private readonly themeService: ThemeService, private readonly styleService: StylesService) {}

  ngOnInit() {
    this.applyStyles();
  }

  ngOnChanges() {
    this.applyStyles();
  }

  private applyStyles() {
    this.styleService.attachStyles([toCSSObject(this.themeService.getTheme())(this.qStyles)], this.elementRef.nativeElement);
  }
}
