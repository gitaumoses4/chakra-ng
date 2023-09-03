import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { SystemModule } from "@quillar/core";

@NgModule({
  declarations: [ButtonComponent],
  imports: [SystemModule],
  providers: [],
  exports: [ButtonComponent],
})
export class ButtonModule {}
