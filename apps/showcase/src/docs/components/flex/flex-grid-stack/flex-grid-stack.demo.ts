import { Component } from "@angular/core";
import { ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "flex-grid-stack-demo",
  templateUrl: "./flex-grid-stack.demo.html",
  imports: [LayoutModule, ChakraSystemModule],
})
export class FlexGridStackDemo {}
