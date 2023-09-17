import { Component } from "@angular/core";
import { LayoutModule, QuillarModule } from "@quillar/angular";

@Component({
  standalone: true,
  selector: "stack-dividers-demo",
  templateUrl: "./stack-dividers.demo.html",
  imports: [QuillarModule, LayoutModule],
})
export class StackDividersDemo {}
