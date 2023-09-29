import { NgModule } from "@angular/core";
import { SideNavComponent } from "./side-nav.component";
import { ChakraIconsModule } from "@chakra-ng/icons";
import * as icons from "./icons";
import { ChakraSystemModule, IconModule, LayoutModule } from "@chakra-ng/angular";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [SideNavComponent],
  imports: [ChakraIconsModule.register(icons), IconModule, ChakraSystemModule, RouterModule, LayoutModule, CommonModule],
  exports: [SideNavComponent],
})
export class SideNavModule {}
