import { Directive } from "@angular/core";
import { BaseStyledDirective, QuillarStyles } from "@quillar/core";

@Directive({
  standalone: true,
  selector: "[qSpace]",
})
export class Space extends BaseStyledDirective {
  getStyles(): QuillarStyles | null | undefined {
    return {
      flex: 1,
      justifySelf: "stretch",
      alignSelf: "stretch",
    };
  }
}
