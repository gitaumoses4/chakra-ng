import { NgModule } from "@angular/core";
import { QuillarSystemModule } from "@quillar/system";
import { QuillarConfigModule } from "@quillar/config";
import { QuillarStylesModule } from "@quillar/styles";

const modules = [QuillarSystemModule, QuillarConfigModule, QuillarStylesModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class QuillarModule {}
