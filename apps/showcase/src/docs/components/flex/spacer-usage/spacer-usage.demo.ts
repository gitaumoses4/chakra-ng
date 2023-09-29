import { Component } from "@angular/core";
import { ButtonModule, LayoutModule, ChakraSystemModule, TypographyModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "flex-spacer-usage",
  templateUrl: "./spacer-usage.demo.html",
  imports: [LayoutModule, ChakraSystemModule, TypographyModule, ButtonModule],
})
export class FlexSpacerUsageDemo {}
