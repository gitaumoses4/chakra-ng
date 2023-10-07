import { Directive } from "@angular/core";
import { BaseChakraDirective } from "./core";
import { ChakraStyles } from "./types";

@Directive({ selector: "[chakra]" })
export class ChakraDirective extends BaseChakraDirective {
  public override getBaseStyles(): ChakraStyles {
    return {};
  }
}
