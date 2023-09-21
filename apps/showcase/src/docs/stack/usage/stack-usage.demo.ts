import { Component } from "@angular/core";
import { ChakraNgModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "stack-usage-demo",
  templateUrl: "./stack-usage.demo.html",
  imports: [LayoutModule, ChakraNgModule],
})
export class StackUsageDemo {}
