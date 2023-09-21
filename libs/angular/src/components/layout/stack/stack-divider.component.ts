import { Component } from "@angular/core";
import { BaseComponent, ChakraStyles } from "@chakra-ng/angular";

@Component({
  selector: "q-stack-divider",
  template: `<div [chakraStyles]="$styles | async"></div>`,
})
export class StackDividerComponent extends BaseComponent {
  override defaultStyles(): ChakraStyles {
    return {
      borderWidth: 0,
      alignSelf: "stretch",
      borderColor: "inherit",
      width: "auto",
      height: "auto",
    };
  }
}
