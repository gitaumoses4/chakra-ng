import { Component } from "@angular/core";
import { ButtonModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "button-icon-demo",
  templateUrl: "./button-icon.demo.html",
  imports: [LayoutModule, ButtonModule],
})
export class ButtonIconDemo {}
