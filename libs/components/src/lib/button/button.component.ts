import { Component, Input } from "@angular/core";
import { QuillarStyles, StyledComponent, ThemeService } from "@quillar/core";

@Component({
  selector: "q-button",
  templateUrl: "./button.component.html",
})
export class ButtonComponent extends StyledComponent("Button") {
  /**
   * If `true` the button will show a spinner
   */
  @Input() public isLoading?: boolean = false;

  /**
   * If `true` the button will be styled in its active state
   */
  @Input() public isActive?: boolean = false;

  /**
   * If `true` the button will be disabled
   */
  @Input() public isDisabled?: boolean = false;

  /**
   * The label to show in the button when `isLoading` is true.
   * If not ext is passed, it only shows the spinner
   */
  @Input() public loadingText?: string = "";

  /**
   * The type of the button
   */
  @Input() public type?: "button" | "submit" | "reset" = "button";

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
