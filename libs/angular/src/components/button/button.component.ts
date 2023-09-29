import { Component, ContentChild, Input, TemplateRef } from "@angular/core";
import { ChakraIcon } from "@chakra-ng/icons";
import { SystemProps } from "@chakra-ui/styled-system";
import { BaseStyledComponent, ChakraStyles } from "../../core";

@Component({
  selector: "chakra-button",
  templateUrl: "./button.component.html",
})
export class ButtonComponent extends BaseStyledComponent<"Button"> {
  /**
   * If `true` the button will show a spinner
   */
  @Input() public isLoading = false;

  /**
   * If `true` the button will be styled in its active state
   */
  @Input() public isActive = false;

  /**
   * If `true` the button will be disabled
   */
  @Input() public isDisabled = false;

  /**
   * The label to show in the button when `isLoading` is true.
   * If not ext is passed, it only shows the spinner
   */
  @Input() public loadingText?: string = undefined;

  /**
   * The type of the button
   */
  @Input() public type: "button" | "submit" | "reset" = "button";

  /**
   * If added, the button will show an icon before the button's label
   */
  @Input() public leftIcon?: ChakraIcon;

  /**
   * If added, the button will show an icon after the button's label
   */
  @Input() public rightIcon?: ChakraIcon;

  /**
   * The space between the button icon and label.
   */
  @Input() public iconSpacing: SystemProps["marginRight"] = "0.5rem";

  /**
   * Replace the spinner component when `isLoading` is set to `true`
   */
  @ContentChild("spinner") public spinner?: TemplateRef<any>;

  /**
   * The spinner placement when `isLoading` is set to `true`
   */
  @Input() public spinnerPlacement: "start" | "end" = "start";

  override defaultStyles(): ChakraStyles {
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
    };
  }

  override component(): string {
    return "Button";
  }
}
