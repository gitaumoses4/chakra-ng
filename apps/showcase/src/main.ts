import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app/app.routes";
import { ConfigModule, QuillarModule } from "@quillar/angular";
import theme from "./theme";

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(appRoutes), ConfigModule.forRoot({ theme }), QuillarModule)],
})
  .then()
  .catch(console.error);
