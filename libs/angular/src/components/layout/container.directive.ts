import { Directive, Input } from "@angular/core";
import { BaseChakraStyledComponent, ChakraStyles } from "../../core";

@Directive({
  selector: "[container]",
})
export class ContainerDirective extends BaseChakraStyledComponent<"Container"> {
  /**
   * If `true`, the children will be centered
   */
  @Input() public centerContent?: boolean;

  override getDefaultStyles(): ChakraStyles {
    if (this.centerContent) {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      };
    }
    return {};
  }

  override getThemeKey(): string {
    return "Container";
  }
}
