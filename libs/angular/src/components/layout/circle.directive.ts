import { Directive } from "@angular/core";
import { SquareDirective } from "./square.directive";
import { ChakraStyles } from "../../core";

@Directive({
  selector: "[circle]",
})
export class CircleDirective extends SquareDirective {
  override getDefaultStyles(): ChakraStyles {
    return { ...super.getDefaultStyles(), borderRadius: "9999px" };
  }
}
