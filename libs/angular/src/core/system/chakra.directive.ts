import { Directive } from "@angular/core";
import { BaseChakraComponent } from "./core";
import { ChakraStyles } from "./types";

@Directive({ selector: "[chakra],[chakraStyles]" })
export class ChakraDirective extends BaseChakraComponent {
  public override getDefaultStyles(): ChakraStyles {
    return {};
  }
}
