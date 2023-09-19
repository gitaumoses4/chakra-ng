import { NgModule, SecurityContext } from "@angular/core";
import { AppComponent } from "./app.component";
import { Route, RouterModule } from "@angular/router";
import { ButtonModule, IconModule, LayoutModule, QuillarModule, ThemeModule, TypographyModule } from "@quillar/angular";
import theme from "../theme";
import { MarkdownModule } from "ngx-markdown";
import { BrowserModule } from "@angular/platform-browser";
import { SideNavComponent } from "../layout/side-nav/side-nav.component";

const routes: Route[] = [
  { path: "", pathMatch: "full", redirectTo: "docs" },
  { path: "docs", loadChildren: () => import("../pages/docs/docs.module").then((m) => m.DocsModule) },
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, SideNavComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ButtonModule,
    QuillarModule,
    ThemeModule.forRoot({ theme }),
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
    LayoutModule,
    TypographyModule,
    IconModule,
  ],
  exports: [RouterModule, AppComponent],
})
export class AppModule {}
