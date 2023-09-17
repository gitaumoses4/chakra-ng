import { Component } from "@angular/core";
import { LayoutModule, QuillarModule } from "@quillar/angular";

@Component({
  standalone: true,
  selector: "flex-spacer-demo",
  templateUrl: "./flex-spacer.demo.html",
  imports: [LayoutModule, QuillarModule],
})
export class FlexSpacerDemo {}
