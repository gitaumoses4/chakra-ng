import { ThemeService } from "../theme";
import { Component, OnChanges, OnInit } from "@angular/core";
import { QuillarStyles } from "./types";
import { BehaviorSubject } from "rxjs";

export function StyledComponent(component: string) {
  @Component({ template: "", standalone: true })
  abstract class BaseComponent implements OnChanges, OnInit {
    public themeStyles = new BehaviorSubject<QuillarStyles>({});
    public styles = new BehaviorSubject<QuillarStyles>({});

    public constructor(public readonly themeService: ThemeService) {}

    ngOnInit() {
      this.refreshStyles();
    }

    ngOnChanges() {
      this.refreshStyles();
    }

    public refreshStyles() {
      this.themeStyles.next(this.themeService.getStyleConfig(component));
      this.styles.next(this.buildStyles(this.themeStyles.value));

      console.log(this.styles.value);
    }

    public abstract buildStyles(themeStyles: QuillarStyles): QuillarStyles;

    public abstract getComponentProps(): Record<string, any>;
  }

  return BaseComponent;
}
