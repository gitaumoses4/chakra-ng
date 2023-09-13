import { NgModule } from "@angular/core";
import { DocsRoutingModule } from "./docs-routing.module";

@NgModule({
  imports: [DocsRoutingModule],
  exports: [DocsRoutingModule],
})
export class DocsModule {}
