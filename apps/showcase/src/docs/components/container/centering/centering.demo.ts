import { Component } from "@angular/core";
import { ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "centering-demo",
  templateUrl: "./centering.demo.html",
  imports: [LayoutModule, ChakraSystemModule],
})
export class CenteringDemo {}
