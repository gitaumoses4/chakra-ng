import { Component } from "@angular/core";
import { IconModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "square-and-circle-demo",
  templateUrl: "./square-and-circle.demo.html",
  imports: [LayoutModule, IconModule],
})
export class SquareAndCircleDemo {}
