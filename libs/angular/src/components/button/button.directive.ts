import { Directive } from "@angular/core";
import { BaseChakraButton } from "./base/base-chakra-button";
import { DomHandler } from "../../utils";

@Directive({
  selector: "[chakraButton]",
})
export class ButtonDirective extends BaseChakraButton {
  override ngOnChanges() {
    super.ngOnChanges();

    DomHandler.applyAttributeFlag(this.elementRef.nativeElement, "disabled", this.isDisabled);
    DomHandler.applyAttributeFlag(this.elementRef.nativeElement, "active", this.isActive);
  }
}
