import { Component } from "@angular/core";
import { ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  imports: [LayoutModule, ChakraSystemModule],
  selector: "flex-usage-demo",
  templateUrl: "./flex-usage.demo.html",
})
export class FlexUsageDemo {}
