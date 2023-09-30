import { Directive } from "@angular/core";
import { BaseChakraStyledComponentDirective } from "./core";
import { Observable, of } from "rxjs";
import { ChakraStyles } from "./types";

@Directive({
  selector: "[chakraComponent]",
})
export class ChakraComponentDirective<ThemeComponent extends string> extends BaseChakraStyledComponentDirective<ThemeComponent> {
  public override getComponentBaseStyles(): Observable<ChakraStyles> {
    return of({});
  }
}
