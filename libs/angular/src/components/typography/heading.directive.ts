import { Directive, OnInit } from "@angular/core";
import { BaseStyledComponentDirective, ChakraStyles } from "../../core";

@Directive({
  selector: "[heading]",
})
export class HeadingDirective extends BaseStyledComponentDirective implements OnInit {
  override component(): string {
    return "Heading";
  }

  override getStyles(): ChakraStyles {
    return {};
  }
}
