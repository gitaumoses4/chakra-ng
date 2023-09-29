import { Component, OnInit } from "@angular/core";
import { navMenu } from "./nav.menu";
import { Router } from "@angular/router";
import { MenuItem } from "./types";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
})
export class SideNavComponent implements OnInit {
  menu = navMenu;

  activeItem: MenuItem | undefined;

  activeRoute: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.activeRoute = this.router.url;

      this.activeItem = this.menu.find((item) => {
        return this.activeRoute?.startsWith(item.routerLink);
      });
    });
  }
}
