import { Component, Inject, Input, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { Doc } from "../../../types";
import { DOCUMENT, Location } from "@angular/common";

@Component({
  selector: "app-doc-section-nav",
  templateUrl: "./doc-section-nav.component.html",
})
export class DocSectionNavComponent implements OnInit, OnDestroy {
  _sections!: Doc[];

  activeId!: string;

  constructor(@Inject(DOCUMENT) private document: Document, private location: Location, private renderer: Renderer2) {}

  @Input() set sections(value: Doc[]) {
    this._sections = value;
  }

  ngOnInit() {
    this.activeId = window.location.hash.replace("#", "") || this._sections[0].id;
  }

  onButtonClick(doc: Doc) {
    this.activeId = doc.id;

    setTimeout(() => {
      this.scrollToLabel(doc.id);
    }, 1);
  }

  scrollToLabel(id: string) {
    if (typeof document !== undefined) {
      const label = document.getElementById(id);
      this.location.go(this.location.path().split("#")[0] + "#" + id);
      label && label.parentElement?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }

  ngOnDestroy() {}
}
