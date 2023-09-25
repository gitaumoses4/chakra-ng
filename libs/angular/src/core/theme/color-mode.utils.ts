import { Inject, Injectable } from "@angular/core";
import { ColorMode } from "./types";
import { DOCUMENT } from "@angular/common";
import { fromEvent, startWith, Subscription } from "rxjs";

const classNames = { light: "chakra-ui-light", dark: "chakra-ui-dark" };

@Injectable()
export class ColorModeUtils {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  public setDataSet(value: ColorMode, disableTransitionOnChange: boolean) {
    const cleanup = disableTransitionOnChange ? this.preventTransition() : undefined;
    this.document.documentElement.dataset["theme"] = value;
    this.document.documentElement.style.colorScheme = value;
    cleanup?.();
  }

  public setClassName(dark: boolean) {
    this.document.body.classList.add(dark ? classNames.dark : classNames.light);
    this.document.body.classList.remove(dark ? classNames.light : classNames.dark);
  }

  public query() {
    return window.matchMedia("(prefers-color-scheme: dark)");
  }

  public getSystemTheme(fallback?: ColorMode) {
    const isDark = this.query().matches ?? fallback === "dark";

    return isDark ? "dark" : "light";
  }

  public addListener(fn: (cm: ColorMode) => unknown): Subscription {
    const mediaQuery = this.query();
    return fromEvent<MediaQueryList>(mediaQuery, "change")
      .pipe(startWith(mediaQuery))
      .subscribe((list) => {
        fn(list.matches ? "dark" : "light");
      });
  }

  public preventTransition() {
    const css = this.document.createElement("style");
    css.appendChild(
      this.document.createTextNode(
        `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
      ),
    );

    this.document.head.appendChild(css);

    return () => {
      (() => window.getComputedStyle(this.document.body))();

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.document.head.removeChild(css);
        });
      });
    };
  }
}
