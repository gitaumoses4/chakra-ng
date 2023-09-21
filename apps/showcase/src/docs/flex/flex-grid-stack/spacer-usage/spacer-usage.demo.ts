import { Component } from "@angular/core";
import { ButtonModule, LayoutModule, SystemModule, TypographyModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "flex-spacer-usage",
  templateUrl: "./spacer-usage.demo.html",
  imports: [LayoutModule, SystemModule, TypographyModule, ButtonModule],
})
export class FlexSpacerUsageDemo {}
