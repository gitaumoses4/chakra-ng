import { Directive, Input } from "@angular/core";
import { BaseChakraStyledComponentDirective, ChakraStyles } from "../../core";

@Directive({
  selector: "[container]",
})
export class ContainerDirective extends BaseChakraStyledComponentDirective<"Container"> {
  /**
   * If `true`, the children will be centered
   */
  @Input() public centerContent?: boolean;

  override getBaseStyles(): ChakraStyles {
    if (this.centerContent) {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      };
    }
    return {};
  }

  override component(): string {
    return "Container";
  }
}
