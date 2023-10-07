import { Component, Input } from "@angular/core";
import { BaseChakraComponent, ChakraStyles } from "../../core";
import { ResponsiveValue, SystemProps, ThemeTypings } from "@chakra-ui/styled-system";

@Component({
  selector: "chakra-button-group",
  template: "<ng-content></ng-content>",
})
export class ButtonGroupComponent extends BaseChakraComponent {
  @Input() public isAttached?: boolean;

  /**
   * If `true`, all buttons in the group will be disabled
   */
  @Input() public isDisabled?: boolean;

  /**
   * @default '0.5rem'
   *
   */
  @Input() public spacing?: SystemProps["marginRight"];

  @Input() public variant?: ResponsiveValue<ThemeTypings["components"]["Button"]["variants"]>;

  @Input() public size?: ResponsiveValue<ThemeTypings["components"]["Button"]["sizes"]>;

  @Input() public colorScheme?: ThemeTypings["colorSchemes"];

  @Input() public orientation?: "vertical" | "horizontal";

  @Input() public styleConfig?: Record<string, any>;

  getBaseStyles(): ChakraStyles {
    return {};
  }
}
