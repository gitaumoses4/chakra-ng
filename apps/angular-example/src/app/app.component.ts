import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  background = "blue.500";

  public updateStyles() {
    const colors = ["red", "blue", "green", "yellow", "purple", "pink"];

    this.background = `${colors[Math.floor(Math.random() * colors.length)]}.500`;
  }
}
