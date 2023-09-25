import { Component } from "@angular/core";
import { ChakraNgModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "embed-image-demo",
  templateUrl: "./embed-image.demo.html",
  imports: [LayoutModule, ChakraNgModule],
})
export class EmbedImageDemo {}
