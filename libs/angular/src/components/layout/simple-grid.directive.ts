import { GridLayoutDirective } from "./grid-layout.directive";
import { Directive, Input } from "@angular/core";
import { ResponsiveValue, SystemProps } from "@chakra-ui/styled-system";
import { ChakraStyles, getToken } from "../../core";
import { mapResponsive } from "@chakra-ui/utils";

function toPx(n: string | number) {
  return typeof n === "number" ? `${n}px` : n;
}

function widthToColumns(width: any, theme: Record<string, any>) {
  return mapResponsive(width, (value) => {
    const _value = getToken("sizes", value, toPx(value))(theme);
    return value === null ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
  });
}

function countToColumns(count: any) {
  return mapResponsive(count, (value) => (value === null ? null : `repeat(${value}, minmax(0, 1fr))`));
}

@Directive({
  selector: "[simpleGrid]",
})
export class SimpleGridDirective extends GridLayoutDirective {
  @Input() minChildWidth?: SystemProps["minWidth"];

  @Input() columns?: ResponsiveValue<number>;

  @Input() spacing?: SystemProps["gridGap"];

  @Input() spacingX?: SystemProps["gridGap"];

  @Input() spacingY?: SystemProps["gridGap"];

  override getBaseStyles(): ChakraStyles {
    const styles = super.getBaseStyles();

    const templateColumns = this.minChildWidth ? widthToColumns(this.minChildWidth, this.themeService.getTheme()) : countToColumns(this.columns);

    return {
      ...styles,
      gridGap: this.spacing || styles.gridGap,
      gridColumnGap: this.spacingX || styles.gridColumnGap,
      gridRowGap: this.spacingY || styles.gridRowGap,
      gridTemplateColumns: templateColumns || styles.gridTemplateColumns,
    };
  }
}
