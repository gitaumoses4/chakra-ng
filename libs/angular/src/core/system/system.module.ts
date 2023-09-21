import { NgModule } from "@angular/core";
import { ChakraStylesDirective } from "./chakra-styles.directive";

@NgModule({
  declarations: [ChakraStylesDirective],
  exports: [ChakraStylesDirective],
})
export class SystemModule {}
