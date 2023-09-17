import { NgModule } from "@angular/core";
import { CodeComponent } from "./code/code.component";
import { DocSectionComponent, DocSectionsComponent } from "./section/doc-section.component";
import { DocSectionNavComponent } from "./section-nav/doc-section-nav.component";
import { CommonModule } from "@angular/common";
import { MarkdownModule } from "ngx-markdown";
import { ButtonModule, LayoutModule, QuillarModule, TypographyModule } from "@quillar/angular";
import { DocPageComponent } from "./page/doc-page.component";

@NgModule({
  declarations: [CodeComponent, DocSectionNavComponent, DocSectionsComponent, DocSectionComponent, DocPageComponent],
  imports: [CommonModule, MarkdownModule, QuillarModule, LayoutModule, ButtonModule, TypographyModule],
  exports: [CodeComponent, DocSectionNavComponent, DocSectionsComponent, DocSectionComponent, DocPageComponent],
})
export class LayoutDocModule {}
