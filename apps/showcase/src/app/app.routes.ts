import { Route } from "@angular/router";

export const appRoutes: Route[] = [
  { path: "", redirectTo: "components", pathMatch: "full" },
  { path: "components", loadChildren: () => import("../pages/components/components-doc.module").then((m) => m.ComponentsDocModule) },
];
