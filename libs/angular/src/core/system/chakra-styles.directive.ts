import { Directive, Input, OnChanges } from "@angular/core";
import { map, Observable } from "rxjs";
import { BaseChakraDirective } from "./core";
import { ChakraStyles } from "./types";

@Directive({ selector: "[chakraStyles]" })
export class ChakraStylesDirective extends BaseChakraDirective implements OnChanges {
  @Input() public chakraStyles: ChakraStyles | null = {};

  override getChakraStyles(): Observable<ChakraStyles> {
    return super.getChakraStyles().pipe(map((chakraStyles) => ({ ...chakraStyles, ...(this.chakraStyles || {}) })));
  }

  getBaseStyles(): ChakraStyles {
    return {};
  }
}
