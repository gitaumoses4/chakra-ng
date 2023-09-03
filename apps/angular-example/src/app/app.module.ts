import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule, ConfigModule, QuillarModule } from "@quillar/angular";
import { IconsModule } from "@quillar/icons";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, QuillarModule, ConfigModule.forRoot(), ButtonModule, IconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
