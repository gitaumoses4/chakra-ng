import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LayoutModule } from "@chakra-ng/angular";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  standalone: true,
  selector: "embed-map-demo",
  templateUrl: "./embed-map.demo.html",
  imports: [LayoutModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmbedMapDemo {
  constructor(protected sanitizer: DomSanitizer) {}

  get mapUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.37" +
        "5295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3" +
        "!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v156" +
        "7723392506!5m2!1sen!2sng",
    );
  }
}
