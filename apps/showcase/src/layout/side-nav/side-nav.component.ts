import { Component } from "@angular/core";
import { navMenu } from "./nav.menu";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
})
export class SideNavComponent {
  items = navMenu;
}
