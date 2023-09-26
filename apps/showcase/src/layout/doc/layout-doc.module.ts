import { NgModule } from "@angular/core";
import { CodeComponent } from "./code/code.component";
import { DocSectionComponent } from "./section/doc-section.component";
import { DocSectionNavComponent } from "./section-nav/doc-section-nav.component";
import { CommonModule } from "@angular/common";
import { MarkdownModule } from "ngx-markdown";
import { ButtonModule, ChakraSystemModule, LayoutModule, TypographyModule } from "@chakra-ng/angular";
import { DocSectionsComponent } from "./sections/doc-sections.component";

@NgModule({
  declarations: [CodeComponent, DocSectionNavComponent, DocSectionsComponent, DocSectionComponent],
  imports: [CommonModule, MarkdownModule, ChakraSystemModule, LayoutModule, ButtonModule, TypographyModule],
  exports: [CodeComponent, DocSectionNavComponent, DocSectionsComponent, DocSectionComponent],
})
export class LayoutDocModule {}
