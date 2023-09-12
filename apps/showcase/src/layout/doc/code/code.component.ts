import { Component, Inject, Input, OnDestroy, OnInit } from "@angular/core";
import { Code } from "./types";
import { CommonModule, DOCUMENT } from "@angular/common";
import { ButtonComponent, ThemeService } from "@quillar/angular";
import { Subscription } from "rxjs";
import { HighlightLoader, HighlightModule } from "ngx-highlightjs";

const STYLE_ELEMENT_ID = "highlight-theme";

const highlightTheme = {
  dark: "assets/css/github-dark.min.css",
  light: "assets/css/github.min.css",
};

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent, HighlightModule],
  selector: "app-code",
  templateUrl: "./code.component.html",
})
export class CodeComponent implements OnInit, OnDestroy {
  @Input() code: Code[] = [];

  public active = 0;

  private subscriptions: Subscription[] = [];

  constructor(private themeService: ThemeService, @Inject(DOCUMENT) private readonly document: Document, private highlightLoader: HighlightLoader) {}

  ngOnInit() {
    this.active = 0;

    this.subscriptions.push(
      this.themeService.$colorMode.subscribe((colorMode) => {
        this.highlightLoader.setTheme(highlightTheme[colorMode]);
      }),
    );
  }

  showCode(index: number) {
    this.active = index;
  }

  get currentCode() {
    return this.code[this.active];
  }

  async copyCode() {
    if (this.currentCode) {
      await navigator.clipboard.writeText(this.currentCode.template);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
