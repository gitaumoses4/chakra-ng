import { NgModule } from "@angular/core";
import { IconsModule } from "@chakra-ng/icons";
import { SystemModule } from "./core";

@NgModule({
  imports: [IconsModule.withIcons({}), SystemModule],
  exports: [SystemModule],
})
export class ChakraNgModule {}
