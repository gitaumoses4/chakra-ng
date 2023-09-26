import { Component } from "@angular/core";
import { ChakraSystemModule, IconModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "square-and-circle-demo",
  templateUrl: "./square-and-circle.demo.html",
  imports: [LayoutModule, ChakraSystemModule, IconModule],
})
export class SquareAndCircleDemo {}
