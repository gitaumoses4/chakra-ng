import { Component } from "@angular/core";
import { ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "usage-demo",
  templateUrl: "./usage.demo.html",
  imports: [LayoutModule, ChakraSystemModule],
})
export class UsageDemo {}
