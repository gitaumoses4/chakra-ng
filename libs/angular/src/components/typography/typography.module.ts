import { NgModule } from "@angular/core";
import { HeadingDirective } from "./heading.directive";

@NgModule({
  declarations: [HeadingDirective],
  exports: [HeadingDirective],
})
export class TypographyModule {}
