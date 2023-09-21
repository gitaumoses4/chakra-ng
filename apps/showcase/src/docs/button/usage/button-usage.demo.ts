import { ButtonModule } from "@chakra-ng/angular";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  imports: [ButtonModule],
  selector: "button-usage-demo",
  templateUrl: "./button-usage.demo.html",
})
export class ButtonUsageDemo {}
