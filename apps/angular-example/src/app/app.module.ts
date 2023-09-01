import { NgModule } from "@angular/core";
import { QuillarModule } from "@quillar/angular";
import { QuillarConfigModule } from "@quillar/config";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    QuillarModule,
    QuillarConfigModule.forRoot({
      theme: {
        config: {
          initialColorMode: "dark",
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
