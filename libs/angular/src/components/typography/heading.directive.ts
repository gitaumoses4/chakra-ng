import { Directive, OnInit } from "@angular/core";
import { ChakraComponentDirective, ChakraStyles } from "../../core";

@Directive({
  selector: "[heading]",
})
export class HeadingDirective extends ChakraComponentDirective<"Heading"> implements OnInit {
  override component(): string {
    return "Heading";
  }

  override getStyles(): ChakraStyles {
    return {};
  }
}
