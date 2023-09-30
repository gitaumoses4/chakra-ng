import { Component } from "@angular/core";
import { LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "template-areas-demo",
  templateUrl: "./template-areas.demo.html",
  imports: [LayoutModule],
})
export class TemplateAreasDemo {
  areas = `"header header"
                     "nav main"
                     "nav footer"`;
}
