import { BaseChakraStyledComponent } from "../../../core";
import { Directive, Input, TemplateRef } from "@angular/core";
import { ChakraIcon } from "@chakra-ng/icons";
import { SystemProps } from "@chakra-ui/styled-system";

@Directive()
export class BaseChakraButton extends BaseChakraStyledComponent<"Button"> {
  @Input() public isLoading = false;
  @Input() public isActive = false;
  @Input() public isDisabled = false;
  @Input() public loadingText?: string = undefined;
  @Input() public type: "button" | "submit" | "reset" = "button";
  @Input() public leftIcon?: ChakraIcon | string;
  @Input() public rightIcon?: ChakraIcon | string;
  @Input() public iconSpacing: SystemProps["marginRight"] = "0.5rem";
  @Input() public spinner?: TemplateRef<any>;
  @Input() public spinnerPlacement: "start" | "end" = "start";

  override getThemeKey(): string {
    return "Button";
  }
}
