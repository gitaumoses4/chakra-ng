import { Component } from "@angular/core";
import { QuillarModule } from "@quillar/angular";
import { QuillarStyles } from "@quillar/system";

@Component({
  standalone: true,
  imports: [QuillarModule],
  selector: "quillar-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  styles: QuillarStyles = {
    bg: "red.800",
  };
}
