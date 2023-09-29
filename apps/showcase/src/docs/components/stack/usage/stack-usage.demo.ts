import { Component } from "@angular/core";
import { ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "stack-usage-demo",
  templateUrl: "./stack-usage.demo.html",
  imports: [LayoutModule, ChakraSystemModule],
})
export class StackUsageDemo {}
