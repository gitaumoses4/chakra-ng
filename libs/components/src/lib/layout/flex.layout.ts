import { Directive, Input } from "@angular/core";
import { SystemProps } from "@chakra-ui/styled-system";
import { BaseStyledDirective, QuillarStyles } from "@quillar/core";

@Directive({
  standalone: true,
  selector: "[qFlex]",
})
export class FlexLayout extends BaseStyledDirective {
  @Input() qFlex: SystemProps["flexDirection"] | "" | undefined;

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

  public override getStyles(): QuillarStyles {
    return {
      display: "flex",
      flexDirection: this.qFlex || "row",
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
