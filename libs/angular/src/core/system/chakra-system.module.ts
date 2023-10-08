import { NgModule } from "@angular/core";
import { ChakraComponentDirective } from "./chakra-component.directive";
import { ChakraDirective } from "./chakra.directive";
import { ChakraStylesDirective } from "./chakra-styles.directive";
import { DataAttrDirective } from "./data-attr.directive";

@NgModule({
  declarations: [ChakraComponentDirective, ChakraDirective, ChakraStylesDirective, DataAttrDirective],
  exports: [ChakraComponentDirective, ChakraDirective, ChakraStylesDirective, DataAttrDirective],
})
export class ChakraSystemModule {}
