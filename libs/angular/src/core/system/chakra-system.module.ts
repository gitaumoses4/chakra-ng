import { NgModule } from "@angular/core";
import { ChakraComponentDirective } from "./chakra-component.directive";
import { ChakraDirective } from "./chakra.directive";

@NgModule({
  declarations: [ChakraComponentDirective, ChakraDirective],
  exports: [ChakraComponentDirective, ChakraDirective],
})
export class ChakraSystemModule {}
