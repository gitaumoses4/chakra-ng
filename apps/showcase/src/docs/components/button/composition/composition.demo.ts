import { Component } from "@angular/core";
import { ButtonModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "composition-demo",
  templateUrl: "./composition.demo.html",
  imports: [ButtonModule],
})
export class CompositionDemo {}
