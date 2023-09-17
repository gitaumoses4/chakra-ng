import { NgModule } from "@angular/core";
import { DocsRoutingModule } from "./docs-routing.module";
import { DocsPage } from "./docs.page";
import { QuillarModule } from "@quillar/angular";

@NgModule({
  declarations: [DocsPage],
  imports: [DocsRoutingModule, QuillarModule],
  exports: [DocsRoutingModule],
})
export class DocsModule {}
