import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { ChakraSystemModule } from "../../core";
import { ButtonGroupComponent } from "./button-group.component";

@NgModule({
  declarations: [ButtonComponent, ButtonGroupComponent],
  imports: [CommonModule, ChakraSystemModule],
  exports: [ButtonComponent, ButtonGroupComponent],
})
export class ButtonModule {}
