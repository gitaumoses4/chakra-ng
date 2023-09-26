import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { ChakraSystemModule } from "../../core";

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, ChakraSystemModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
