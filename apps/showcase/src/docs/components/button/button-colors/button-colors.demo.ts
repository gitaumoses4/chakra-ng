import { Component } from "@angular/core";
import { ButtonModule, ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "button-colors-demo",
  templateUrl: "./button-colors.demo.html",
  imports: [LayoutModule, ButtonModule, ChakraSystemModule, CommonModule],
})
export class ButtonColorsDemo {
  public colorSchemes = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "cyan",
    "purple",
    "pink",
    "linkedin",
    "facebook",
    "messenger",
    "whatsapp",
    "twitter",
    "telegram",
  ];
}
