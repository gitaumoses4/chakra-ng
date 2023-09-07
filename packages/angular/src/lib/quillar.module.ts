import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SystemModule } from "@quillar/core";
import { IconsModule } from "@quillar/icons";

const modules = [SystemModule];

@NgModule({
  imports: [CommonModule, IconsModule.withIcons({}), ...modules],
  exports: [...modules],
})
export class QuillarModule {}
