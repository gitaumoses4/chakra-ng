import { Directive } from "@angular/core";
import { SquareDirective } from "./square.directive";
import { ChakraStyles } from "../../core";

@Directive({
  selector: "[chakraCircle]",
})
export class CircleDirective extends SquareDirective {
  override getStyles(): ChakraStyles {
    return { ...super.getStyles(), borderRadius: "9999px" };
  }
}
