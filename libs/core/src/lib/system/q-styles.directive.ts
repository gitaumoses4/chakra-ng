import { Directive, Input } from "@angular/core";
import { QuillarProps } from "./types";
import { BaseStyledDirective } from "./base-styled.directive";

@Directive({ selector: "[qStyles]" })
export class QStylesDirective extends BaseStyledDirective {
  @Input() public qStyles: QuillarProps | null = null;

  override getStyles(): QuillarProps | null {
    return this.qStyles;
  }
}
