import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { docs } from "../../../docs";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";

@Component({
  selector: "app-doc",
  templateUrl: "./doc-page.component.html",
})
export class DocPageComponent implements OnInit {
  public $page = this.route.paramMap.pipe(
    map((params) => {
      const pageDocId = params.get("pageDocId");

      if (!pageDocId) {
        return null;
      }

      return docs[pageDocId];
    }),
  );
  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.$page.subscribe((page) => {
      if (page) {
        this.titleService.setTitle(page.title + " - Quillar UI");
      } else {
        this.router.navigate(["/docs"]).then();
      }
    });
  }
}
