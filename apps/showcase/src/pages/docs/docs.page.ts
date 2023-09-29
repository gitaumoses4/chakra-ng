import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";
import { docs } from "../../docs";

@Component({
  selector: "app-docs",
  templateUrl: "./docs.page.html",
})
export class DocsPage implements OnInit {
  public $page = this.route.paramMap.pipe(
    map((params) => {
      const categoryId = params.get("categoryId");
      const pageDocId = params.get("pageDocId");

      if (!categoryId || !pageDocId) {
        return null;
      }

      return docs[categoryId][pageDocId];
    }),
  );

  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.$page.subscribe((page) => {
      if (page) {
        this.titleService.setTitle(page.title + " - ChakraNg");
      } else {
        this.router.navigate(["/docs"]).then();
      }
    });
  }
}
