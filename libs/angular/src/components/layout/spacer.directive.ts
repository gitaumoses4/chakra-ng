import { Directive } from "@angular/core";
import { BaseChakraDirective, ChakraStyles } from "../../core";

@Directive({
  selector: "[spacer]",
})
export class SpacerDirective extends BaseChakraDirective {
  getBaseStyles(): ChakraStyles {
    return {
      flex: 1,
      justifySelf: "stretch",
      alignSelf: "stretch",
    };
  }
}
