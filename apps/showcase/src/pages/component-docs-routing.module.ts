import { Route, RouterModule } from "@angular/router";
import { ComponentDocsPage } from "../layout/doc/component-docs.page";
import { NgModule } from "@angular/core";

const routes: Route[] = [
  {
    path: "",
    component: ComponentDocsPage,
    children: [
      { path: "", redirectTo: "button", pathMatch: "full" },
      {
        path: "button",
        loadComponent: () => import("./components/button.docs").then((mod) => mod.ButtonDocs),
      },
      {
        path: "flex",
        loadComponent: () => import("./components/flex.docs").then((mod) => mod.FlexDocs),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentDocsRoutingModule {}
