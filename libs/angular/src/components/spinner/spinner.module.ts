import { NgModule } from "@angular/core";
import { SpinnerComponent } from "./spinner.component";
import { ChakraSystemModule } from "../../core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [SpinnerComponent],
  imports: [ChakraSystemModule, CommonModule],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
