import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconsModule } from "@quillar/icons";

@NgModule({
  imports: [CommonModule, IconsModule.withIcons({})],
  exports: [CommonModule],
})
export class QuillarModule {}
