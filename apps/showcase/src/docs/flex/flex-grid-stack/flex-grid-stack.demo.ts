import { Component } from "@angular/core";
import { ChakraNgModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "flex-grid-stack-demo",
  templateUrl: "./flex-grid-stack.demo.html",
  imports: [LayoutModule, ChakraNgModule],
})
export class FlexGridStackDemo {}
