import { NgModule } from "@angular/core";
import { QStylesDirective } from "./q-styles.directive";

@NgModule({
  declarations: [QStylesDirective],
  exports: [QStylesDirective],
})
export class SystemModule {}
