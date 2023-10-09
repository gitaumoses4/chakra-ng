import { Component } from "@angular/core";
import { BaseChakraButtonComponent } from "./base/base-chakra-button.component";

@Component({
  selector: "chakra-button",
  templateUrl: "./button.component.html",
})
export class ButtonComponent extends BaseChakraButtonComponent {
  override applyStylesOnHost(): boolean {
    return false;
  }
}
