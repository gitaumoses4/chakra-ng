import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  styles = {
    bg: "blue.500",
  };

  public updateStyles() {
    const colors = ["red", "blue", "green", "yellow", "purple", "pink"];

    this.styles = { bg: `${colors[Math.floor(Math.random() * colors.length)]}.500` };
  }
}
