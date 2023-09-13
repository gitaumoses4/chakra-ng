import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppDocSectionsComponent } from "../sections/app-doc-sections.component";
import { DocSectionNavComponent } from "../section-nav/doc-section-nav.component";
import { docs } from "../../../docs";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";
import { FlexLayout } from "@quillar/components";
import { QStylesDirective } from "@quillar/core";

@Component({
  standalone: true,
  selector: "app-doc",
  templateUrl: "./doc.component.html",
  imports: [CommonModule, AppDocSectionsComponent, DocSectionNavComponent, FlexLayout, QStylesDirective],
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
  constructor(private titleService: Title, private metaService: Meta, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.$page.subscribe((page) => {
      if (page) {
        this.titleService.setTitle(page.title + " - Quillar UI");
        this.metaService.updateTag({ name: "description", content: page.description || "" });
      } else {
        this.router.navigate(["/docs"]).then();
      }
    });
  }
}
