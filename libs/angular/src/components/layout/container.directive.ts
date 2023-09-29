import { Directive, Input } from "@angular/core";
import { ChakraComponentDirective, ChakraStyles } from "@chakra-ng/angular";

@Directive({
  selector: "[container]",
})
export class ContainerDirective extends ChakraComponentDirective<"Container"> {
  /**
   * If `true`, the children will be centered
   */
  @Input() public centerContent?: boolean;

  override getStyles(): ChakraStyles {
    return this.centerContent
      ? {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }
      : {};
  }

  override component(): string {
    return "Container";
  }
}
