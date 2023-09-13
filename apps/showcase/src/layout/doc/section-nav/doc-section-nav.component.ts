import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from "@angular/core";
import { Doc } from "../../../types";
import { CommonModule, DOCUMENT, Location } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: "app-doc-section-nav",
  templateUrl: "./doc-section-nav.component.html",
})
export class DocSectionNavComponent implements OnInit {
  @Input() sections!: Doc[];

  activeId!: string;

  isScrollBlocked = false;

  @ViewChild("nav") nav!: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document, private location: Location) {}

  ngOnInit(): void {
    if (typeof window !== undefined) {
      const hash = window.location.hash.substring(1) || "";
      const hasHash = hash.trim() !== "";
      const id = hasHash ? hash : ((this.sections && this.sections[0]) || {}).id;

      this.activeId = id!;
      hasHash &&
        setTimeout(() => {
          this.scrollToLabelById(id);
        }, 1);
    }
  }

  onChildButtonClick(parent: Doc, isFirst: boolean, child: Doc): void {
    this.onButtonClick(isFirst ? parent : child);
  }

  onButtonClick(doc: Doc) {
    this.activeId = doc.id;
    setTimeout(() => {
      this.scrollToLabelById(doc.id);
      this.isScrollBlocked = true;
    }, 1);
  }

  scrollToLabelById(id: string) {
    if (typeof document !== undefined) {
      const label = document.getElementById(id);
      this.location.go(this.location.path().split("#")[0] + "#" + id);
      label && label.parentElement?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }

  isActiveChildId(isFirst: boolean, activeId: string, childId: string, parentId: string): boolean {
    if (isFirst) {
      return this.getActiveChildId(activeId, parentId);
    }

    return this.getActiveChildId(activeId, childId);
  }

  getActiveChildId(activeId: string, childId: string) {
    return activeId.toLowerCase() === childId.toLowerCase();
  }
}
