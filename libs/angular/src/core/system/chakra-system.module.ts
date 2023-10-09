import { NgModule } from "@angular/core";
import { ChakraComponentDirective } from "./chakra-component.directive";
import { ChakraDirective } from "./chakra.directive";
import { DataAttrDirective } from "./data-attr.directive";

@NgModule({
  declarations: [ChakraComponentDirective, ChakraDirective, DataAttrDirective],
  exports: [ChakraComponentDirective, ChakraDirective, DataAttrDirective],
})
export class ChakraSystemModule {}
