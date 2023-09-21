import { Component } from "@angular/core";
import { LayoutModule, ChakraNgModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "stack-dividers-demo",
  templateUrl: "./stack-dividers.demo.html",
  imports: [ChakraNgModule, LayoutModule],
})
export class StackDividersDemo {}
