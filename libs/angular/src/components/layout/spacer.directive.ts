import { Directive } from "@angular/core";
import { BaseChakraComponent, ChakraStyles } from "../../core";

@Directive({
  selector: "[spacer]",
})
export class SpacerDirective extends BaseChakraComponent {
  getDefaultStyles(): ChakraStyles {
    return {
      flex: 1,
      justifySelf: "stretch",
      alignSelf: "stretch",
    };
  }
}
