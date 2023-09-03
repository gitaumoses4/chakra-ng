import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SystemModule } from "@quillar/core";

const modules = [SystemModule];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class QuillarModule {}
