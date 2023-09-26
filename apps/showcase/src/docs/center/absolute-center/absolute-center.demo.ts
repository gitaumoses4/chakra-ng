import { Component } from "@angular/core";
import { ChakraSystemModule, IconModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "absolute-center-demo",
  templateUrl: "./absolute-center.demo.html",
  imports: [ChakraSystemModule, LayoutModule, IconModule],
})
export class AbsoluteCenterDemo {}
