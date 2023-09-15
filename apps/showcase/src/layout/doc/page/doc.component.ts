import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { DocSectionNavComponent } from "../section-nav/doc-section-nav.component";
import { docs } from "../../../docs";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";
import { FlexLayout, Heading, QStylesDirective } from "@quillar/angular";
import { MarkdownModule } from "ngx-markdown";
import { DocSectionModule } from "../section/doc-section.component";

@Component({
  standalone: true,
  selector: "app-doc",
  templateUrl: "./doc.component.html",
  imports: [CommonModule, DocSectionModule, DocSectionNavComponent, FlexLayout, QStylesDirective, MarkdownModule, Heading],
})
export class DocComponent implements OnInit {
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
