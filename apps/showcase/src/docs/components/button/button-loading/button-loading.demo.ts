import { Component } from "@angular/core";
import { ButtonModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "button-loading-demo",
  templateUrl: "./button-loading.demo.html",
  imports: [LayoutModule, ButtonModule],
})
export class ButtonLoadingDemo {}
