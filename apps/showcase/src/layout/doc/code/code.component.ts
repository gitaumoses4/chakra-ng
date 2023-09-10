import { Component, Inject, Input, OnDestroy, OnInit } from "@angular/core";
import { Code } from "./types";
import { CommonModule, DOCUMENT } from "@angular/common";
import { ThemeService } from "@quillar/angular";
import { Subscription } from "rxjs";
import { DomSanitizer } from "@angular/platform-browser";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);

const STYLE_ELEMENT_ID = "highlight-theme";

const highlightTheme = {
  dark: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css",
  light: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css",
};

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-code",
  templateUrl: "./code.component.html",
})
export class CodeComponent implements OnInit, OnDestroy {
  @Input() code: Code[] = [];

  public currentCode?: Code;

  private subscriptions: Subscription[] = [];

  constructor(private themeService: ThemeService, @Inject(DOCUMENT) private readonly document: Document, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.currentCode = this.code[0];
    const styleElement = document.getElementById(STYLE_ELEMENT_ID);

    if (styleElement) {
      this.subscriptions.push(
        this.themeService.$colorMode.subscribe((colorMode) => {
          styleElement.setAttribute("href", highlightTheme[colorMode]);
        }),
      );
    }
  }

  showCode(index: number) {
    this.currentCode = this.code[index];
  }

  async copyCode() {
    if (this.currentCode) {
      await navigator.clipboard.writeText(this.currentCode.template);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public getTemplate() {
    if (this.currentCode) {
      return hljs.highlight(this.currentCode?.template || "", { language: this.currentCode.language }).value;
    }
    return "";
  }
}
