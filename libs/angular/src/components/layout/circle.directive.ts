import { Directive } from "@angular/core";
import { SquareDirective } from "./square.directive";
import { ChakraStyles } from "../../core";

@Directive({
  selector: "[circle]",
})
export class CircleDirective extends SquareDirective {
  override getBaseStyles(): ChakraStyles {
    return { ...super.getBaseStyles(), borderRadius: "9999px" };
  }
}
