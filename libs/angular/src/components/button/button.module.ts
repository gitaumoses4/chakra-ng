import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { ChakraSystemModule } from "../../core";
import { ButtonGroupComponent } from "./button-group.component";
import { IconModule } from "../icon";
import { SpinnerModule } from "../spinner/spinner.module";
import { ButtonSpinnerComponent } from "./button-spinner.component";
import { ButtonDirective } from "./button.directive";

@NgModule({
  declarations: [ButtonComponent, ButtonGroupComponent, ButtonSpinnerComponent, ButtonDirective],
  imports: [CommonModule, ChakraSystemModule, IconModule, SpinnerModule],
  exports: [ButtonComponent, ButtonGroupComponent, ButtonSpinnerComponent, ButtonDirective],
})
export class ButtonModule {}
