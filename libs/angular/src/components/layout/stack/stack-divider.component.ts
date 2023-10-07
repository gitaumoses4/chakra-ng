import { Component } from "@angular/core";
import { BaseChakraComponent, ChakraStyles } from "../../../core";

@Component({
  selector: "chakra-stack-divider",
  template: "",
})
export class StackDividerComponent extends BaseChakraComponent {
  override getBaseStyles(): ChakraStyles {
    return {
      borderWidth: 0,
      alignSelf: "stretch",
      borderColor: "inherit",
      width: "auto",
      height: "auto",
    };
  }
}
