import { Route, RouterModule } from "@angular/router";
import { DocsPage } from "./docs.page";
import { NgModule } from "@angular/core";

const routes: Route[] = [
  {
    path: "",
    component: DocsPage,
    children: [
      { path: "", redirectTo: "button", pathMatch: "full" },
      { path: ":pageDocId", loadComponent: () => import("../../layout/doc/page/doc-page.component").then((m) => m.DocPageComponent) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
