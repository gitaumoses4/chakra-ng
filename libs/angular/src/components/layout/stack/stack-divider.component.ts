import { Component } from "@angular/core";
import { BaseChakraComponent, BaseChakraStyles } from "@chakra-ng/angular";

@Component({
  selector: "chakra-stack-divider",
  template: "",
})
export class StackDividerComponent extends BaseChakraComponent {
  override getBaseStyles(): BaseChakraStyles {
    return {
      borderWidth: 0,
      alignSelf: "stretch",
      borderColor: "inherit",
      width: "auto",
      height: "auto",
    };
  }
}
