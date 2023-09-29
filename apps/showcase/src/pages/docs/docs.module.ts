import { NgModule } from "@angular/core";
import { DocsPage } from "./docs.page";
import { ChakraSystemModule, LayoutModule, TypographyModule } from "@chakra-ng/angular";
import { LayoutDocModule } from "../../layout/doc/layout-doc.module";
import { MarkdownModule } from "ngx-markdown";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [
  { path: "", redirectTo: "components", pathMatch: "full" },
  {
    path: ":categoryId",
    children: [
      { path: "", redirectTo: "button", pathMatch: "full" },
      { path: ":pageDocId", component: DocsPage },
    ],
  },
];

@NgModule({
  declarations: [DocsPage],
  imports: [RouterModule.forChild(routes), ChakraSystemModule, LayoutDocModule, MarkdownModule, TypographyModule, LayoutModule, CommonModule],
  exports: [RouterModule],
})
export class DocsModule {}
