import { Component } from "@angular/core";
import { BaseChakraStyledComponent, ChakraStyles } from "../../core";

@Component({
  selector: "chakra-checkbox",
  templateUrl: "./checkbox.component.html",
})
export class CheckboxComponent extends BaseChakraStyledComponent<"Checkbox"> {
  getDefaultStyles(): ChakraStyles {
    return {};
  }

  getThemeKey(): string {
    return "Checkbox";
  }
}
