import { NgModule } from "@angular/core";
import { ElementDirective } from "./element.directive";
import { StylesModule } from "../styles";
import { ThemeModule } from "../theme/theme.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ElementDirective],
  imports: [StylesModule, ThemeModule, CommonModule],
  providers: [],
  exports: [ElementDirective, ThemeModule, CommonModule],
})
export class SystemModule {}
