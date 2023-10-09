import { ButtonModule, LayoutModule } from "@chakra-ng/angular";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  imports: [ButtonModule, LayoutModule],
  selector: "button-usage-demo",
  templateUrl: "./button-usage.demo.html",
})
export class ButtonUsageDemo {}
