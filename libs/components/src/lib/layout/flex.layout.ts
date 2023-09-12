import { Directive, Input } from "@angular/core";
import { SystemProps } from "@chakra-ui/styled-system";
import { BaseStyledDirective, QuillarStyles } from "@quillar/core";

@Directive({
  standalone: true,
  selector: "[qFlex]",
})
export class FlexLayout extends BaseStyledDirective {
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
   * Shorthand for `flexDirection` style prop
   */
  @Input() direction?: SystemProps["flexDirection"];

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

  public override getStyles(): QuillarStyles {
    return {
      display: "flex",
      flexDirection: this.direction,
      alignItems: this.align,
      justifyContent: this.justify,
      flexWrap: this.wrap,
      flexBasis: this.basis,
      flexGrow: this.grow,
      flexShrink: this.shrink,
    };
  }
}
