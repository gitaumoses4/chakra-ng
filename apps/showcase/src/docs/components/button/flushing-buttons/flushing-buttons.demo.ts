import { Component } from "@angular/core";
import { ButtonModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "flushing-buttons-demo",
  templateUrl: "./flushing-buttons.demo.html",
  imports: [ButtonModule],
})
export class FlushingButtonsDemo {}
