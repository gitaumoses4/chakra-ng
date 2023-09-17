import { Directive } from "@angular/core";
import { SquareDirective } from "./square.directive";
import { QuillarStyles } from "@quillar/core";

@Directive({
  selector: "[qCircle]",
})
export class CircleDirective extends SquareDirective {
  override getStyles(): QuillarStyles | null | undefined {
    return { ...super.getStyles(), borderRadius: "9999px" };
  }
}
