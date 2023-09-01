import { NgModule } from "@angular/core";
import { QuillarSystemModule } from "@quillar/system";

const modules = [QuillarSystemModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class QuillarModule {}
