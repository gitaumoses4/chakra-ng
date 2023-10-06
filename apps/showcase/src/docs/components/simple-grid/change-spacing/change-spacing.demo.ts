import { Component } from "@angular/core";
import { ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "change-spacing-demo",
  templateUrl: "./change-spacing.demo.html",
  imports: [LayoutModule, ChakraSystemModule],
})
export class ChangeSpacingDemo {}
