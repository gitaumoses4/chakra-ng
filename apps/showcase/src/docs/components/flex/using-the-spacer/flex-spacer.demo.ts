import { Component } from "@angular/core";
import { ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "flex-spacer-demo",
  templateUrl: "./flex-spacer.demo.html",
  imports: [LayoutModule, ChakraSystemModule],
})
export class FlexSpacerDemo {}
