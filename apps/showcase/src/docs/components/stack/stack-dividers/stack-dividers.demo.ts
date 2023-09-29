import { Component } from "@angular/core";
import { ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "stack-dividers-demo",
  templateUrl: "./stack-dividers.demo.html",
  imports: [ChakraSystemModule, LayoutModule],
})
export class StackDividersDemo {}
