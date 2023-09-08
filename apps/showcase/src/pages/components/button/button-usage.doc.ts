import { Component } from "@angular/core";
import { CodeComponent } from "../../../layout/doc/code/code.component";
import { Code } from "../../../layout/doc/code/types";

@Component({
  standalone: true,
  template: "<app-code [code]='code'></app-code>",
  imports: [CodeComponent],
})
export class ButtonUsageDoc {
  code: Code = {
    typescript: `import * from 'ButtonModule';`,
  };
}
