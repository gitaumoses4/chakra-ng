import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { QuillarConfigModule, QuillarModule } from "@quillar/angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, QuillarModule, QuillarConfigModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
