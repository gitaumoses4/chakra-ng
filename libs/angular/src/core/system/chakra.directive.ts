import { Directive } from "@angular/core";
import { BaseChakraDirective } from "./core";
import { BaseChakraStyles } from "./types";
import { Observable } from "rxjs";

@Directive({ selector: "[chakra]" })
export class ChakraDirective extends BaseChakraDirective {
  public override getBaseStyles(): BaseChakraStyles | Observable<BaseChakraStyles> {}
}
