import { Directive, Input } from "@angular/core";
import { BaseChakraStyledComponentDirective, BaseChakraStyles } from "@chakra-ng/angular";

@Directive({
  selector: "[container]",
})
export class ContainerDirective extends BaseChakraStyledComponentDirective<"Container"> {
  /**
   * If `true`, the children will be centered
   */
  @Input() public centerContent?: boolean;

  override getComponentBaseStyles(): BaseChakraStyles {
    if (this.centerContent) {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      };
    }
  }

  override component(): string {
    return "Container";
  }
}
