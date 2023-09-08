import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewContainerRef } from "@angular/core";
import { DocSection } from "../../../pages/components/types";
import { CommonModule } from "@angular/common";

type Props = Omit<DocSection, "component">;

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-docsection",
  templateUrl: "./app-docsection.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppDocSectionsComponent implements AfterViewInit {
  @Input() sections!: DocSection[];

  @ViewChild("sectionContainer", { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.sections.forEach((section) => {
      this.container.createComponent(section.component);
    });

    this.cd.detectChanges();
  }

  loadComponent(index: number) {
    const section: DocSection = this.sections[index];

    const viewContainerRef = this.container;
    let component;
    if (section.component !== undefined) {
      component = viewContainerRef.createComponent<Props>(section.component);
      component.instance.id = section.id;
      component.instance.description = section.description;
      component.instance.header = section.header;
    }
  }
}
