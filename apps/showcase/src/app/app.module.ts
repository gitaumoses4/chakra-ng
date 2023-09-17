import { NgModule, SecurityContext } from "@angular/core";
import { AppComponent } from "./app.component";
import { Route, RouterModule } from "@angular/router";
import { ButtonModule, QuillarModule, ThemeModule } from "@quillar/angular";
import theme from "../theme";
import { MarkdownModule } from "ngx-markdown";

const routes: Route[] = [{ path: "docs", loadChildren: () => import("../pages/docs/docs.module").then((m) => m.DocsModule) }];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    ButtonModule,
    QuillarModule,
    ThemeModule.forRoot({ theme }),
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
  ],
  exports: [RouterModule, AppComponent],
})
export class AppModule {}
