import { Directive, OnInit } from "@angular/core";
import { BaseChakraStyledComponent, ChakraStyles } from "../../core";

@Directive({
  selector: "[heading]",
})
export class HeadingDirective extends BaseChakraStyledComponent<"Heading"> implements OnInit {
  override getThemeKey(): string {
    return "Heading";
  }

  public override getDefaultStyles(): ChakraStyles {
    return {};
  }
}
