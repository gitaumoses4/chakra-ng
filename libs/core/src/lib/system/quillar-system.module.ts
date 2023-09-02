import { NgModule } from "@angular/core";
import { QuillarComponentDirective } from "./quillar.component.directive";
import { QuillarStylesModule } from "../styles";

@NgModule({
  declarations: [QuillarComponentDirective],
  imports: [QuillarStylesModule],
  providers: [],
  exports: [QuillarComponentDirective],
})
export class QuillarSystemModule {}
