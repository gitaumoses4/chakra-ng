import { Component, OnChanges } from "@angular/core";
import { QuillarStyles, StyledComponent, ThemeService } from "@quillar/core";

@Component({
  selector: "q-button",
  templateUrl: "./button.component.html",
})
export class ButtonComponent extends StyledComponent("Button") {
  constructor(public override themeService: ThemeService) {
    super(themeService);
  }

  override buildStyles(styles: QuillarStyles): QuillarStyles {
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...styles,
    };
  }

  override getComponentProps(): Record<string, any> {
    return {};
  }
}
