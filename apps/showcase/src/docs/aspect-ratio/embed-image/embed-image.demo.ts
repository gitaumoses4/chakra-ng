import { Component } from "@angular/core";
import { ChakraSystemModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "embed-image-demo",
  templateUrl: "./embed-image.demo.html",
  imports: [LayoutModule, ChakraSystemModule],
})
export class EmbedImageDemo {}
