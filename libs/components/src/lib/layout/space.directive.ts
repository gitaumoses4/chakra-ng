import { Directive } from "@angular/core";
import { BaseStyledDirective, QuillarProps } from "@quillar/core";

@Directive({
  selector: "[qSpace]",
})
export class SpaceDirective extends BaseStyledDirective {
  getStyles(): QuillarProps | null | undefined {
    return {
      flex: 1,
      justifySelf: "stretch",
      alignSelf: "stretch",
    };
  }
}
