import { Component, Input, TemplateRef } from "@angular/core";
import { BaseChakraButton } from "./base/base-chakra-button";
import { ChakraIcon } from "@chakra-ng/icons";
import { SystemProps } from "@chakra-ui/styled-system";

@Component({
  selector: "chakra-button",
  templateUrl: "./button.component.html",
})
export class ButtonComponent extends BaseChakraButton {
  @Input() public isLoading = false;
  @Input() public loadingText?: string = undefined;
  @Input() public type: "button" | "submit" | "reset" = "button";
  @Input() public leftIcon?: ChakraIcon | string;
  @Input() public rightIcon?: ChakraIcon | string;
  @Input() public iconSpacing: SystemProps["marginRight"] = "0.5rem";
  @Input() public spinner?: TemplateRef<any>;
  @Input() public spinnerPlacement: "start" | "end" = "start";

  override applyStylesOnHost(): boolean {
    return false;
  }
}
