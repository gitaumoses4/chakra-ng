import { Directive, Input } from "@angular/core";
import { SystemProps } from "@chakra-ui/styled-system";
import { BaseStyledDirective, ChakraStyles } from "@chakra-ng/angular";

@Directive({
  selector: "[grid]",
})
export class GridLayoutDirective extends BaseStyledDirective {
  /**
   * Shorthand prop for `gridTemplateColumns`
   */
  @Input() templateColumns?: SystemProps["gridTemplateColumns"];
  /**
   * Shorthand prop for `gridGap`
   */
  @Input() gap?: SystemProps["gridGap"];
  /**
   * Shorthand prop for `gridRowGap`
   */
  @Input() rowGap?: SystemProps["gridRowGap"];
  /**
   * Shorthand prop for `gridColumnGap`
   */
  @Input() columnGap?: SystemProps["gridColumnGap"];
  /**
   * Shorthand prop for `gridAutoFlow`
   */
  @Input() autoFlow?: SystemProps["gridAutoFlow"];
  /**
   * Shorthand prop for `gridAutoRows`
   */
  @Input() autoRows?: SystemProps["gridAutoRows"];
  /**
   * Shorthand prop for `gridAutoColumns`
   */
  @Input() autoColumns?: SystemProps["gridAutoColumns"];
  /**
   * Shorthand prop for `gridTemplateRows`
   */
  @Input() templateRows?: SystemProps["gridTemplateRows"];
  /**
   * Shorthand prop for `gridTemplateAreas`
   */
  @Input() templateAreas?: SystemProps["gridTemplateAreas"];
  /**
   * Shorthand prop for `gridColumn`
   */
  @Input() column?: SystemProps["gridColumn"];
  /**
   * Shorthand prop for `gridRow`
   */
  @Input() row?: SystemProps["gridRow"];

  public override getStyles(): ChakraStyles {
    return {
      display: "grid",
      gridTemplateColumns: this.templateColumns,
      gridGap: this.gap,
      gridRowGap: this.rowGap,
      gridColumnGap: this.columnGap,
      gridAutoFlow: this.autoFlow,
      gridAutoRows: this.autoRows,
      gridAutoColumns: this.autoColumns,
      gridTemplateRows: this.templateRows,
      gridTemplateAreas: this.templateAreas,
      gridColumn: this.column,
      gridRow: this.row,
    };
  }
}
