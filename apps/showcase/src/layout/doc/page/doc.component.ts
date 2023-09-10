import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { DocPage } from "../../../types";
import { CommonModule } from "@angular/common";
import { AppDocSectionsComponent } from "../sections/app-doc-sections.component";
import { DocSectionNavComponent } from "../section-nav/doc-section-nav.component";

@Component({
  standalone: true,
  selector: "app-doc",
  templateUrl: "./doc.component.html",
  imports: [CommonModule, AppDocSectionsComponent, DocSectionNavComponent],
})
export class DocComponent implements OnChanges {
  @Input() page!: DocPage;

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.page && changes.page.currentValue) {
      this.titleService.setTitle(changes.page.currentValue.title);
      this.metaService.updateTag({ name: "description", content: changes.page.currentValue.description });
    }
  }
}
