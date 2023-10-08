import { Component } from "@angular/core";
import { ButtonModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "custom-spinner-demo",
  templateUrl: "./custom-spinner.demo.html",
  styleUrls: ["./custom-spinner.demo.scss"],
  imports: [ButtonModule],
})
export class CustomSpinnerDemo {}
