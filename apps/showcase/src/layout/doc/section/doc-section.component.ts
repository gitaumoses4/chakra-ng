import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgModule, ViewChild, ViewContainerRef } from "@angular/core";
import { Doc } from "../../../types";
import { CommonModule, Location } from "@angular/common";
import { FlexLayout, Heading, QStylesDirective, QuillarModule } from "@quillar/angular";
import { MarkdownModule } from "ngx-markdown";
import { CodeComponent } from "../code/code.component";

@Component({
  selector: "app-doc-sections",
  template: `
    <div class="flex flex-col gap-6 my-4">
      <app-doc-section [section]="section" *ngFor="let section of sections"></app-doc-section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppDocSectionsComponent {
  @Input() sections!: Doc[];
}

@Component({
  selector: "app-doc-section",
  templateUrl: "./doc-section.component.html",
})
export class DocSectionComponent implements AfterViewInit {
  @Input({ required: true }) section!: Doc;

  @ViewChild("sectionContainer", { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild("demoContainer", { read: ViewContainerRef }) demoContainer!: ViewContainerRef;

  constructor(private changeDetectorRef: ChangeDetectorRef, private location: Location) {}

  ngAfterViewInit() {
    if (this.section.demo?.component) {
      this.section.demo.component
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

@NgModule({
  declarations: [AppDocSectionsComponent, DocSectionComponent],
  imports: [CommonModule, FlexLayout, QStylesDirective, MarkdownModule, QuillarModule, CodeComponent, Heading],
  exports: [AppDocSectionsComponent, DocSectionComponent],
})
export class DocSectionModule {}
