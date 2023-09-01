import { QuillarConfig } from "./quillar.config";
import { NgModule } from "@angular/core";
import { ThemeService } from "./theme.service";

@NgModule({
  providers: [QuillarConfig, ThemeService],
})
export class QuillarConfigModule {}
