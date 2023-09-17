import { Directive, OnInit } from "@angular/core";
import { BaseStyledComponentDirective, QuillarProps } from "@quillar/core";

@Directive({
  selector: "[qHeading]",
})
export class HeadingDirective extends BaseStyledComponentDirective implements OnInit {
  override component(): string {
    return "Heading";
  }

  override getStyles(): QuillarProps | null | undefined {
    return undefined;
  }
}
