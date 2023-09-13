import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom, SecurityContext } from "@angular/core";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app/app.routes";
import { QuillarModule, ThemeModule } from "@quillar/angular";
import theme from "./theme";
import { MarkdownModule } from "ngx-markdown";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(appRoutes),
      ThemeModule.forRoot({ theme }),
      QuillarModule,
      MarkdownModule.forRoot({
        sanitize: SecurityContext.NONE,
      }),
    ),
  ],
})
  .then()
  .catch(console.error);
