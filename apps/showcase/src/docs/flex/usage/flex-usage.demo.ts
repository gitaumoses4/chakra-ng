import { Component } from "@angular/core";
import { LayoutModule, QuillarModule } from "@quillar/angular";

@Component({
  standalone: true,
  imports: [LayoutModule, QuillarModule],
  selector: "flex-usage-demo",
  templateUrl: "./flex-usage.demo.html",
})
export class FlexUsageDemo {}
