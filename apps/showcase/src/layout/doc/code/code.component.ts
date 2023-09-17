import { Component, Input } from "@angular/core";
import { Code } from "../../../types";

@Component({
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
