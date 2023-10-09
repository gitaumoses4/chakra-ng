import { Directive } from "@angular/core";
import { BaseChakraComponent } from "./core";
import { ChakraStyles } from "./types";

@Directive({ selector: "[chakra]" })
export class ChakraDirective extends BaseChakraComponent {
  public override getBaseStyles(): ChakraStyles {
    return {};
  }
}
