import { Component } from "@angular/core";
import { ThemeService } from "@quillar/angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  styles = {
    bg: "blue.500",
  };

  constructor(private themeService: ThemeService) {}

  public updateStyles() {
    const colors = ["red", "blue", "green", "yellow", "purple", "pink"];

    this.styles = { bg: `${colors[Math.floor(Math.random() * colors.length)]}.500` };
  }

  public updateDirection() {
    this.themeService.toggleDirection();
  }
}
