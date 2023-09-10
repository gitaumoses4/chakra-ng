import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { DocSection } from "../../../types";
import { Location, NgIf } from "@angular/common";
import { QStylesDirective, QuillarModule } from "@quillar/angular";
import { Code } from "../code/types";
import { docs } from "../../../docs";
import { CodeComponent } from "../code/code.component";

@Component({
  standalone: true,
  selector: "app-doc-section",
  imports: [NgIf, QuillarModule, QStylesDirective, CodeComponent],
  template: `
    <div class="flex flex-col gap-4">
      <h1 class="group">
        {{ section.header }}
        <a class="invisible group-hover:visible cursor-pointer" [qStyles]="{ color: 'accent' }" (click)="navigate($event, section)">#</a>
      </h1>
      <p *ngIf="section.description">{{ section.description }}</p>
      <div [ngClass]="{ card: code?.length }">
        <ng-template #sectionContainer></ng-template>
      </div>
      <app-code [code]="code"></app-code>
    </div>
  `,
})
export class DocSectionComponent implements AfterViewInit, OnInit {
  @Input({ required: true }) parentId!: string;
  @Input({ required: true }) section!: DocSection;

  public code: Code[] = [];

  @ViewChild("sectionContainer", { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private changeDetectorRef: ChangeDetectorRef, private location: Location) {}

  ngOnInit() {
    this.code = (docs as any)[this.getDocsId()] || [];
  }

  public getDocsId() {
    return this.parentId + "/" + this.section.id;
  }

  ngAfterViewInit() {
    this.container.createComponent(this.section.component);
    this.changeDetectorRef.detectChanges();
  }

  navigate(event: any, section: DocSection) {
    if (typeof window !== undefined) {
      const hash = window.location.hash.substring(1);
      this.location.go(this.location.path().split("#")[0] + "#" + section.id);

      hash === section.id && event.preventDefault();
    }
  }

  getSectionCode() {}
}
