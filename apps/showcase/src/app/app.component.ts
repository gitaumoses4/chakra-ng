import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonComponent, QStylesDirective, ThemeService } from "@quillar/angular";

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent, QStylesDirective],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "showcase";

  styles = {
    bg: "red.500",
  };

  index = 0;

  constructor(private readonly themeService: ThemeService) {}

  public toggleTheme() {
    this.themeService.toggleColorMode();
  }

  public updateStyles() {
    const colors = ["red", "blue", "green", "yellow", "pink", "orange", "teal", "purple"];

    this.index = (this.index + 1) % colors.length;

    this.styles = { bg: colors[this.index] + ".500" };
  }
}
