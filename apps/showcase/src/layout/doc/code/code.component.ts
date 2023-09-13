import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent, FlexLayout, QStylesDirective } from "@quillar/angular";
import { Code } from "../../../types";
import { MarkdownModule } from "ngx-markdown";

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent, MarkdownModule, FlexLayout, QStylesDirective],
  selector: "app-code",
  templateUrl: "./code.component.html",
  styleUrls: ["./code.component.scss"],
})
export class CodeComponent {
  @Input() code: Code[] = [];

  public active = 0;

  showCode(index: number) {
    this.active = index;
  }

  public getCodeContent(code: Code) {
    return ` \`\`\`${code.language}\n ${code.content} \`\`\` `;
  }
}
