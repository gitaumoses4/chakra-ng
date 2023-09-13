import { Route } from "@angular/router";

export const appRoutes: Route[] = [{ path: "docs", loadChildren: () => import("../pages/docs/docs.module").then((m) => m.DocsModule) }];
