import { NgModule } from "@angular/core";
import { ChakraComponentDirective } from "./chakra-component.directive";
import { ChakraDirective } from "./chakra.directive";
import { ChakraStylesDirective } from "./chakra-styles.directive";

@NgModule({
  declarations: [ChakraComponentDirective, ChakraDirective, ChakraStylesDirective],
  exports: [ChakraComponentDirective, ChakraDirective, ChakraStylesDirective],
})
export class ChakraSystemModule {}
