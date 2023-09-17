import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Doc } from "../../../types";

@Component({
  selector: "app-doc-sections",
  template: `
    <div qFlexColumn [gap]="6" [qStyles]="{ my: '6' }">
      <app-doc-section [section]="section" *ngFor="let section of sections"></app-doc-section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocSectionsComponent {
  @Input() sections!: Doc[];
}
