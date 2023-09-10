import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonComponent, ThemeService } from "@quillar/angular";

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "showcase";

  constructor(private readonly themeService: ThemeService) {}

  public toggleTheme() {
    this.themeService.toggleColorMode();
  }
}
