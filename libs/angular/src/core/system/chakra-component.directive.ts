import { Directive } from "@angular/core";
import { BaseChakraStyledComponentDirective } from "./core";
import { ChakraStyles } from "./types";

@Directive({
  selector: "[chakraComponent]",
})
export class ChakraComponentDirective<ThemeComponent extends string> extends BaseChakraStyledComponentDirective<ThemeComponent> {
  override getBaseStyles(): ChakraStyles {
    return {};
  }
}
