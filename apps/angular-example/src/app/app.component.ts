import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  color = "blue.500";

  public updateStyles() {
    this.color = "white.500";
  }
}
