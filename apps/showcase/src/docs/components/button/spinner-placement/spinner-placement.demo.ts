import { Component } from "@angular/core";
import { ButtonModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "spinner-placement-demo",
  templateUrl: "./spinner-placement.demo.html",
  imports: [LayoutModule, ButtonModule],
})
export class SpinnerPlacementDemo {}
