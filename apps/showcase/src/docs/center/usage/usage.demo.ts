import { Component } from "@angular/core";
import { ChakraNgModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "usage-demo",
  templateUrl: "./usage.demo.html",
  imports: [LayoutModule, ChakraNgModule],
})
export class UsageDemo {}
