import { Component } from "@angular/core";
import { ChakraNgModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "embed-video-demo",
  templateUrl: "./embed-video.demo.html",
  imports: [LayoutModule, ChakraNgModule],
})
export class EmbedVideoDemo {}
