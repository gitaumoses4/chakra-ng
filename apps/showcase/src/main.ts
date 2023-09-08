import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app/app.routes";
import { ConfigModule, QuillarModule } from "@quillar/angular";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(appRoutes), ConfigModule.forRoot({ theme: { config: { initialColorMode: "dark" } } }), QuillarModule),
  ],
})
  .then()
  .catch(console.error);
