import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { SystemModule } from "../../core";

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, SystemModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
