import { Directive } from "@angular/core";
import { BaseStyledDirective, QuillarStyles } from "@quillar/core";

@Directive({
  selector: "[qSpace]",
})
export class SpaceDirective extends BaseStyledDirective {
  getStyles(): QuillarStyles | null | undefined {
    return {
      flex: 1,
      justifySelf: "stretch",
      alignSelf: "stretch",
    };
  }
}
