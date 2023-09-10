import { ButtonComponent } from "@quillar/angular";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  imports: [ButtonComponent],
  selector: "button-usage-demo",
  templateUrl: "./button-usage-demo.html",
})
export class ButtonUsageDemo {}
