import { Directive } from "@angular/core";
import { BaseStyledDirective, ChakraStyles } from "../../core";

@Directive({
  selector: "[spacer]",
})
export class SpacerDirective extends BaseStyledDirective {
  getStyles(): ChakraStyles {
    return {
      flex: 1,
      justifySelf: "stretch",
      alignSelf: "stretch",
    };
  }
}
