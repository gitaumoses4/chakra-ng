import { Directive, OnInit } from "@angular/core";
import { BaseStyledComponentDirective, QuillarStyles } from "@quillar/core";

@Directive({
  selector: "[qHeading]",
})
export class HeadingDirective extends BaseStyledComponentDirective implements OnInit {
  override component(): string {
    return "Heading";
  }

  override getStyles(): QuillarStyles | null | undefined {
    return undefined;
  }
}
