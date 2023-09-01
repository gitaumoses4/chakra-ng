import { Component } from "@angular/core";
import { QuillarStyles } from "@quillar/system";

@Component({
  selector: "quillar-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  styles: QuillarStyles = {
    bg: "red.800",
  };
}
