import { Directive } from "@angular/core";
import { BaseChakraButtonComponent } from "./base/base-chakra-button.component";

@Directive({
  selector: "[chakraButton]",
})
export class ButtonDirective extends BaseChakraButtonComponent {}
