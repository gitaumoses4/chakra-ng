import { Component } from "@angular/core";
import { ButtonModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "button-sizes-demo",
  templateUrl: "./button-sizes.demo.html",
  imports: [LayoutModule, ButtonModule],
})
export class ButtonSizesDemo {}
