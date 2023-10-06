import { Directive, Input } from "@angular/core";
import { SystemProps } from "@chakra-ui/styled-system";
import { Observable } from "rxjs";
import { BaseChakraDirective, BaseChakraStyles } from "../../core";

@Directive({
  selector: "[wrap]",
})
export class WrapLayoutDirective extends BaseChakraDirective {
  /**
   * The space between each child (even if it wraps)
   * @type SystemProps["margin"]
   */
  @Input() spacing?: SystemProps["margin"] = "0.5rem";
  /**
   * The horizontal space between the each child (even if it wraps). Defaults to `spacing` if not defined.
   * @type SystemProps["margin"]
   */
  @Input() spacingX?: SystemProps["margin"];
  /**
   * The vertical space between the each child (even if it wraps). Defaults to `spacing` if not defined.
   * @type SystemProps["margin"]
   */
  @Input() spacingY?: SystemProps["margin"];
  /**
   * The `justify-content` value (for cross-axis alignment)
   * @type SystemProps["justifyContent"]
   */
  @Input() justify?: SystemProps["justifyContent"];
  /**
   * The `align-items` value (for main axis alignment)
   * @type SystemProps["alignItems"]
   */
  @Input() align?: SystemProps["alignItems"];
  /**
   * The `flex-direction` value
   * @type SystemProps["flexDirection"]
   */
  @Input() direction?: SystemProps["flexDirection"];
  /**
   * If `true`, the children will be wrapped in a `WrapItem`
   * @default false
   */
  @Input() shouldWrapChildren?: boolean;

  getBaseStyles(): Observable<BaseChakraStyles> | BaseChakraStyles {
    return {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: this.justify,
      alignItems: this.align,
      flexDirection: this.direction,
      gap: this.spacing,
      columnGap: this.spacingX,
      rowGap: this.spacingY,
    };
  }
}
