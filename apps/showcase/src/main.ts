import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom, SecurityContext } from "@angular/core";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app/app.routes";
import { QuillarModule, ThemeModule } from "@quillar/angular";
import theme from "./theme";
import { HIGHLIGHT_OPTIONS } from "ngx-highlightjs";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient } from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(appRoutes),
      ThemeModule.forRoot({ theme }),
      QuillarModule,
      MarkdownModule.forRoot({
        loader: HttpClient,
        sanitize: SecurityContext.NONE,
      }),
    ),
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import("highlight.js/lib/core"),
        lineNumbersLoader: () => import("ngx-highlightjs/line-numbers"),
        languages: {
          typescript: () => import("highlight.js/lib/languages/typescript"),
          css: () => import("highlight.js/lib/languages/css"),
          xml: () => import("highlight.js/lib/languages/xml"),
        },
        themePath: "assets/css/github.min.css",
      },
    },
  ],
})
  .then()
  .catch(console.error);
