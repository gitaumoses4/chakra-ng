import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild, ViewContainerRef } from "@angular/core";
import { Doc } from "../../../types";
import { Location } from "@angular/common";

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

  public getHeadingSize() {
    const sizes = ["lg", "md", "sm", "xs"];

    return this.section.depth > sizes.length ? sizes[sizes.length - 1] : sizes[this.section.depth - 1];
  }
}
