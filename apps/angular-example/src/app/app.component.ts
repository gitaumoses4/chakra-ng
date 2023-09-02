import { Component } from "@angular/core";
import { QuillarStyles } from "@quillar/angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  styles: QuillarStyles = {
    bg: "red.800",
  };

  public updateStyles() {
    this.styles = {
      bg: "blue.800",
    };
  }
}
