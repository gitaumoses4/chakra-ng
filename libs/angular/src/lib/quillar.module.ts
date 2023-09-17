import { NgModule } from "@angular/core";
import { IconsModule } from "@quillar/icons";
import { SystemModule } from "@quillar/core";

@NgModule({
  imports: [IconsModule.withIcons({}), SystemModule],
  exports: [SystemModule],
})
export class QuillarModule {}
