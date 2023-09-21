import { Directive } from "@angular/core";
import { BaseStyledDirective, ChakraStyles } from "../../core";

@Directive({
  selector: "[chakraSpacer]",
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
