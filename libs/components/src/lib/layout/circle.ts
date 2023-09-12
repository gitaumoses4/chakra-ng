import { Directive } from "@angular/core";
import { Square } from "./square";
import { QuillarStyles } from "@quillar/core";

@Directive({
  standalone: true,
  selector: "[qCircle]",
})
export class Circle extends Square {
  override getStyles(): QuillarStyles | null | undefined {
    return { ...super.getStyles(), borderRadius: "9999px" };
  }
}
