import { Directive, Input } from "@angular/core";
import { SystemProps } from "@chakra-ui/styled-system";
import { BaseStyledDirective, ChakraStyles } from "../../core";

const FLEX_DIRECTION = {
  flexRow: "row",
  flexColumn: "column",
  flexRowReverse: "row-reverse",
  flexColumnReverse: "column-reverse",
};

@Directive({
  selector: "[flex],[flexColumn],[flexRow],[flexRowReverse],[flexColumnReverse]",
})
export class FlexLayoutDirective extends BaseStyledDirective {
  /**
   * Shorthand for `alignItems` style prop
   */
  @Input() align?: SystemProps["alignItems"];

  /**
   * Shorthand for `justifyContent` style prop
   */
  @Input() justify?: SystemProps["justifyContent"];

  /**
   * Shorthand for `flexWrap` style prop
   */
  @Input() wrap?: SystemProps["flexWrap"];

  /**
   * Shorthand for `flexBasis` style prop
   */
  @Input() basis?: SystemProps["flexBasis"];

  /**
   * Shorthand for `flexGrow` style prop
   */
  @Input() grow?: SystemProps["flexGrow"];

  /**
   * Shorthand for `flexShrink style prop
   */
  @Input() shrink?: SystemProps["flexShrink"];

  /**
   * It defines the gap between the flex items
   */
  @Input() gap?: SystemProps["gap"];

  /**
   * It defines the gap between the flex items along the main axis
   */
  @Input() rowGap?: SystemProps["rowGap"];

  /**
   * It defines the gap between the flex items along the cross axis
   */
  @Input() columnGap?: SystemProps["columnGap"];

  private getFlexDirection() {
    const element = this.elementRef.nativeElement as HTMLElement;

    const direction = Object.keys(FLEX_DIRECTION).find((key) => {
      return element.hasAttribute(key);
    });

    return direction ? (FLEX_DIRECTION as any)[direction] : "row";
  }

  public override getStyles(): ChakraStyles {
    return {
      display: "flex",
      flexDirection: this.getFlexDirection(),
      alignItems: this.align,
      justifyContent: this.justify,
      flexWrap: this.wrap,
      flexBasis: this.basis,
      flexGrow: this.grow,
      flexShrink: this.shrink,
      gap: this.gap,
      rowGap: this.rowGap,
      columnGap: this.columnGap,
    };
  }
}
