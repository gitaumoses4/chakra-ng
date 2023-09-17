import { Component } from "@angular/core";
import { LayoutModule } from "@quillar/components";
import { QuillarModule } from "@quillar/angular";

@Component({
  standalone: true,
  selector: "stack-usage-demo",
  templateUrl: "./stack-usage.demo.html",
  imports: [LayoutModule, QuillarModule],
})
export class StackUsageDemo {}
