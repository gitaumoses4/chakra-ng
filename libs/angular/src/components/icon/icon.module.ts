import { NgModule } from "@angular/core";
import { IconComponent } from "./icon.component";
import { CommonModule } from "@angular/common";
import { ChakraSystemModule } from "../../core";

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, ChakraSystemModule],
  exports: [IconComponent],
})
export class IconModule {}
