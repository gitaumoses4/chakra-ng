import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuillarSystemModule } from "@quillar/core";

const modules = [QuillarSystemModule];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class QuillarModule {}
