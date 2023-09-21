import { Component } from "@angular/core";
import { LayoutModule, ChakraNgModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "flex-spacer-demo",
  templateUrl: "./flex-spacer.demo.html",
  imports: [LayoutModule, ChakraNgModule],
})
export class FlexSpacerDemo {}
