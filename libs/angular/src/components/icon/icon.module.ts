import { NgModule } from "@angular/core";
import { IconComponent } from "./icon.component";
import { CommonModule } from "@angular/common";
import { SystemModule } from "../../core";

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, SystemModule],
  exports: [IconComponent],
})
export class IconModule {}
