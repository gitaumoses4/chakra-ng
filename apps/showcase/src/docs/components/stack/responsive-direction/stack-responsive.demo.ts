import { Component } from "@angular/core";
import { ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "stack-responsive-demo",
  templateUrl: "./stack-responsive.demo.html",
  imports: [ChakraSystemModule, LayoutModule],
})
export class StackResponsiveDemo {}
