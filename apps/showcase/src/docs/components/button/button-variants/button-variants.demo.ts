import { Component } from "@angular/core";
import { ButtonModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "button-variants-demo",
  templateUrl: "./button-variants.demo.html",
  imports: [LayoutModule, ButtonModule],
})
export class ButtonVariantsDemo {}
