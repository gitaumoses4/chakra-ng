import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild, ViewContainerRef } from "@angular/core";
import { Doc } from "../../../types";
import { Location, NgIf } from "@angular/common";
import { FlexLayout, QStylesDirective, QuillarModule } from "@quillar/angular";
import { CodeComponent } from "../code/code.component";
import { MarkdownModule } from "ngx-markdown";

@Component({
  standalone: true,
  selector: "app-doc-section",
  imports: [NgIf, QuillarModule, QStylesDirective, CodeComponent, MarkdownModule, FlexLayout],
  template: `
    <div [qFlex]="'column'" [gap]="4">
      <h1 class="group">
        {{ section.title }}
        <a
          [qStyles]="{ color: 'accent', cursor: 'pointer', visibility: 'hidden', _groupHover: { visibility: 'visible' } }"
          (click)="navigate($event, section)"
          >#</a
        >
      </h1>
      <p *ngIf="section.description">{{ section.description }}</p>
      <div *ngIf="section.content" markdown class="markdown" [innerHTML]="section.content"></div>
      <div
        [qStyles]="{
          w: 'full',
          p: '4',
          borderWidth: '1px',
          borderColor: 'blackAlpha.200',
          borderRadius: 'lg',
          _dark: { borderColor: 'whiteAlpha.200' },
        }"
        *ngIf="section.code.length"
      >
        <ng-template #demoContainer></ng-template>
      </div>
      <app-code [code]="section.code"></app-code>
    </div>
  `,
})
export class DocSectionComponent implements AfterViewInit {
  @Input({ required: true }) section!: Doc;

  @ViewChild("sectionContainer", { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild("demoContainer", { read: ViewContainerRef }) demoContainer!: ViewContainerRef;

  constructor(private changeDetectorRef: ChangeDetectorRef, private location: Location) {}

  ngAfterViewInit() {
    if (this.section.demo) {
      this.section.demo
        .then((module) => Object.values(module)[0])
        .then((component: any) => {
          this.demoContainer.createComponent(component);
          this.changeDetectorRef.detectChanges();
        });
    }
  }

  navigate(event: any, section: Doc) {
    if (typeof window !== undefined) {
      const hash = window.location.hash.substring(1);
      this.location.go(this.location.path().split("#")[0] + "#" + section.id);

      hash === section.id && event.preventDefault();
    }
  }
}
