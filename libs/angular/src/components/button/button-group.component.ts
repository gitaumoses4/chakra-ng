import { Component, HostBinding, Input } from "@angular/core";
import { BaseChakraComponent, ChakraStyles } from "../../core";
import { ResponsiveValue, SystemProps, SystemStyleObject, ThemeTypings } from "@chakra-ui/styled-system";

const attachedStyles: Record<string, SystemStyleObject> = {
  horizontal: {
    "> *:first-of-type:not(:last-of-type) > button": { borderEndRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type) > button": { borderRadius: 0, borderStartWidth: 0 },
    "> *:not(:first-of-type):last-of-type > button": { borderStartRadius: 0, borderStartWidth: 0 },
  },
  vertical: {
    "> *:first-of-type:not(:last-of-type) > button": { borderBottomRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type) > button": { borderRadius: 0, borderTopWidth: 0 },
    "> *:not(:first-of-type):last-of-type > button": { borderTopRadius: 0, borderTopWidth: 0 },
  },
};

const gapStyles = {
  horizontal: (spacing: any): SystemStyleObject => ({
    "& > *:not(style) ~ *:not(style)": { marginStart: spacing },
  }),
  vertical: (spacing: any): SystemStyleObject => ({
    "& > *:not(style) ~ *:not(style)": { marginTop: spacing },
  }),
};

@Component({
  selector: "chakra-button-group",
  template: "<ng-content></ng-content>",
})
export class ButtonGroupComponent extends BaseChakraComponent {
  @HostBinding("attr.data-attached")
  @Input()
  public isAttached?: boolean;

  /**
   * If `true`, all buttons in the group will be disabled
   */
  @Input() public isDisabled?: boolean;

  /**
   * @default '0.5rem'
   *
   */
  @Input() public spacing: SystemProps["marginRight"] = "0.5rem";

  @Input() public variant?: ResponsiveValue<ThemeTypings["components"]["Button"]["variants"]>;

  @Input() public size?: ResponsiveValue<ThemeTypings["components"]["Button"]["sizes"]>;

  @Input() public colorScheme?: ThemeTypings["colorSchemes"];

  @HostBinding("attr.data-orientation")
  @Input()
  public orientation: "vertical" | "horizontal" = "horizontal";

  override applyStylesOnHost(): boolean {
    return true;
  }

  getDefaultStyles(): ChakraStyles {
    return {
      __css: {
        display: "inline-flex",
        ...(this.isAttached ? attachedStyles[this.orientation] : gapStyles[this.orientation](this.spacing)),
      },
    };
  }
}
