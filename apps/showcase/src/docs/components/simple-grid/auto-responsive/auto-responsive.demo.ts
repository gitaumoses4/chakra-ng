import { Component } from "@angular/core";
import { ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "auto-responsive-demo",
  templateUrl: "./auto-responsive.demo.html",
  imports: [LayoutModule, ChakraSystemModule],
})
export class AutoResponsiveDemo {}
