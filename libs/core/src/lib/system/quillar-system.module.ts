import { NgModule } from "@angular/core";
import { QuillarElementDirective } from "./quillar-element.directive";
import { QuillarStylesModule } from "../styles";

@NgModule({
  declarations: [QuillarElementDirective],
  imports: [QuillarStylesModule],
  providers: [],
  exports: [QuillarElementDirective],
})
export class QuillarSystemModule {}
