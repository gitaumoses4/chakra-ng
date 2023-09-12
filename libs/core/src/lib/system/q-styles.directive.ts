import { Directive, Input } from "@angular/core";
import { QuillarStyles } from "./types";
import { BaseStyledDirective } from "./base-styled.directive";

@Directive({ standalone: true, selector: "[qStyles]" })
export class QStylesDirective extends BaseStyledDirective {
  @Input() public qStyles: QuillarStyles | null = null;

  override getStyles(): QuillarStyles | null {
    return this.qStyles;
  }
}
