import { NgModule } from "@angular/core";
import { StylesModule } from "../styles";
import { ThemeModule } from "../theme/theme.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [StylesModule, ThemeModule, CommonModule],
  providers: [],
  exports: [ThemeModule, CommonModule],
})
export class SystemModule {}
