import { DocPage } from "../../../types";
import { Component } from "@angular/core";
import { DocComponent } from "./doc.component";
import { docs } from "../../../docs";

export function createDocs(docPage: DocPage) {
  @Component({
    standalone: true,
    imports: [DocComponent],
    template: ` <app-doc [page]="page"></app-doc>`,
  })
  class DocPageComponent {
    page: DocPage = docPage;
  }

  return DocPageComponent;
}
