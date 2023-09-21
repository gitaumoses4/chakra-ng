import { Component } from "@angular/core";
import { LayoutModule, ChakraNgModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "stack-responsive-demo",
  templateUrl: "./stack-responsive.demo.html",
  imports: [ChakraNgModule, LayoutModule],
})
export class StackResponsiveDemo {}
