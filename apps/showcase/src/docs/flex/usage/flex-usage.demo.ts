import { Component } from "@angular/core";
import { LayoutModule, ChakraNgModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  imports: [LayoutModule, ChakraNgModule],
  selector: "flex-usage-demo",
  templateUrl: "./flex-usage.demo.html",
})
export class FlexUsageDemo {}
