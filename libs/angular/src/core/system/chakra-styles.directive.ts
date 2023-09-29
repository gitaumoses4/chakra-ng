import { Directive } from "@angular/core";
import { ChakraStyles } from "./types";
import { BaseStyledDirective } from "./base-styled.directive";

@Directive({ selector: "[chakraStyles]" })
export class ChakraStylesDirective extends BaseStyledDirective {
  override getStyles(): ChakraStyles {
    return {};
  }
}
