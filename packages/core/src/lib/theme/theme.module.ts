import { NgModule } from "@angular/core";
import { ColorModeUtils } from "./color-mode.utils";
import { ThemeService } from "./theme.service";

@NgModule({
  providers: [ColorModeUtils, ThemeService],
})
export class ThemeModule {}
