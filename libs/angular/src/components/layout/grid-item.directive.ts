import { Directive, Input } from "@angular/core";
import { ResponsiveValue, SystemProps } from "@chakra-ui/styled-system";
import { compact } from "@chakra-ui/object-utils";
import { mapResponsive } from "@chakra-ui/utils";
import { BaseChakraDirective, ChakraStyles } from "../../core";

function spanFn(span?: ResponsiveValue<number | "auto">) {
  return mapResponsive(span, (value) => (value === "auto" ? "auto" : `span ${value}/span ${value}`));
}

@Directive({
  selector: "[gridItem]",
})
export class GridItemDirective extends BaseChakraDirective {
  /**
   * Shorthand prop for `gridArea`
   * @type SystemProps["gridArea"]
   */
  @Input() area?: SystemProps["gridArea"];
  /**
   * The number of columns the grid item should `span`.
   * @type ResponsiveValue<number | "auto">
   */
  @Input() colSpan?: ResponsiveValue<number | "auto">;
  /**
   * The column number the grid item should start.
   * @type ResponsiveValue<number | "auto">
   */
  @Input() colStart?: ResponsiveValue<number | "auto">;
  /**
   * @type ResponsiveValue<number | "auto">
   */
  @Input() colEnd?: ResponsiveValue<number | "auto">;
  /**
   * @type ResponsiveValue<number | "auto">
   */
  @Input() rowStart?: ResponsiveValue<number | "auto">;
  /**
   * @type ResponsiveValue<number | "auto">
   */
  @Input() rowEnd?: ResponsiveValue<number | "auto">;
  /**
   * @type ResponsiveValue<number | "auto">
   */
  @Input() rowSpan?: ResponsiveValue<number | "auto">;

  override getBaseStyles(): ChakraStyles {
    return compact({
      gridArea: this.area,
      gridColumn: spanFn(this.colSpan),
      gridRow: spanFn(this.rowSpan),
      gridColumnStart: this.colStart,
      gridColumnEnd: this.colEnd,
      gridRowStart: this.rowStart,
      gridRowEnd: this.rowEnd,
    });
  }
}
