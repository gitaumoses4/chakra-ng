import { NgModule } from "@angular/core";
import { ChakraStylesDirective } from "./chakra-styles.directive";
import { ChakraComponentDirective } from "./chakra-component.directive";

@NgModule({
  declarations: [ChakraStylesDirective, ChakraComponentDirective],
  exports: [ChakraStylesDirective, ChakraComponentDirective],
})
export class ChakraSystemModule {}
