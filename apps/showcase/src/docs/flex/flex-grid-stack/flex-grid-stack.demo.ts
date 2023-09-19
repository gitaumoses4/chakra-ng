import { Component } from "@angular/core";
import { LayoutModule } from "@quillar/components";
import { QuillarModule } from "@quillar/angular";

@Component({
  standalone: true,
  selector: "flex-grid-stack-demo",
  templateUrl: "./flex-grid-stack.demo.html",
  imports: [LayoutModule, QuillarModule],
})
export class FlexGridStackDemo {}
