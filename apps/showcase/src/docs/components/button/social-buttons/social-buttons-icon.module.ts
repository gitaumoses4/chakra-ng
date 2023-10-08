import { NgModule } from "@angular/core";
import { ChakraIconsModule } from "@chakra-ng/icons";
import * as icons from "./icons";

@NgModule({
  imports: [ChakraIconsModule.register(icons)],
})
export class SocialButtonsIconModule {}
