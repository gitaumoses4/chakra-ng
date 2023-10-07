import { Component } from "@angular/core";
import { ButtonModule, ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "button-colors-demo",
  templateUrl: "./button-colors.demo.html",
  imports: [LayoutModule, ButtonModule, ChakraSystemModule],
})
export class ButtonColorsDemo {}
