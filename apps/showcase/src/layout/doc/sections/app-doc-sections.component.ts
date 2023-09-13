import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Doc } from "../../../types";
import { CommonModule } from "@angular/common";
import { DocSectionComponent } from "../section/doc-section.component";

@Component({
  standalone: true,
  imports: [CommonModule, DocSectionComponent],
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
