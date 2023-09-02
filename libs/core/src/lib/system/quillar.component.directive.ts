import { Directive, ElementRef, Inject, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";
import { QuillarStyles } from "./types";
import { toCSSObject } from "./system";
import { ThemeService } from "../config";
import { QuillarStylesService } from "../styles";
import { DOCUMENT } from "@angular/common";

@Directive({ selector: "[qStyles]" })
export class QuillarComponentDirective implements OnInit, OnChanges {
  @Input() qStyles: QuillarStyles = {};

  constructor(
    private readonly elementRef: ElementRef,
    private readonly themeService: ThemeService,
    private readonly styleService: QuillarStylesService,
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  ngOnInit() {
    this.applyStyles();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.applyStyles();
  }

  private applyStyles() {
    const styleObject = toCSSObject(this.themeService.getTheme())(this.qStyles);

    this.styleService.attachStyles([styleObject], this.elementRef.nativeElement);
  }
}
