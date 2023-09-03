import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule, ConfigModule, QuillarModule } from "@quillar/angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, QuillarModule, ConfigModule.forRoot(), ButtonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
