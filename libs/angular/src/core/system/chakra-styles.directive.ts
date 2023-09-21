import { Directive, Input } from "@angular/core";
import { ChakraStyles } from "./types";
import { BaseStyledDirective } from "./base-styled.directive";

@Directive({ selector: "[chakraStyles]" })
export class ChakraStylesDirective extends BaseStyledDirective {
  @Input() public chakraStyles: ChakraStyles | null = null;

  override getStyles(): ChakraStyles {
    return this.chakraStyles || {};
  }
}
