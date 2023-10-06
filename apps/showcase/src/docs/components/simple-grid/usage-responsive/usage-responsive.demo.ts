import { Component } from "@angular/core";
import { ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "usage-responsive-demo",
  templateUrl: "./usage-responsive.demo.html",
  imports: [LayoutModule, ChakraSystemModule],
})
export class UsageResponsiveDemo {}
