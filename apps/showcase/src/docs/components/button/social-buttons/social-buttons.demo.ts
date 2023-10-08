import { Component } from "@angular/core";
import { ButtonModule, LayoutModule } from "@chakra-ng/angular";
import { SocialButtonsIconModule } from "./social-buttons-icon.module";

@Component({
  standalone: true,
  selector: "social-buttons-demo",
  templateUrl: "./social-buttons.demo.html",
  imports: [LayoutModule, ButtonModule, SocialButtonsIconModule],
})
export class SocialButtonsDemo {}
