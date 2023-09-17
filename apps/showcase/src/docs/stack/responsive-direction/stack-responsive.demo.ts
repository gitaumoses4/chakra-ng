import { Component } from "@angular/core";
import { LayoutModule, QuillarModule } from "@quillar/angular";

@Component({
  standalone: true,
  selector: "stack-responsive-demo",
  templateUrl: "./stack-responsive.demo.html",
  imports: [QuillarModule, LayoutModule],
})
export class StackResponsiveDemo {}
