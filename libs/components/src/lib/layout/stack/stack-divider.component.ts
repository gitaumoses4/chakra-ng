import { Component } from "@angular/core";
import { BaseComponent, QuillarStyleObject } from "@quillar/core";

@Component({
  selector: "q-stack-divider",
  template: `<div [qStyles]="$styles | async"></div>`,
})
export class StackDividerComponent extends BaseComponent {
  override defaultStyles(): QuillarStyleObject {
    return {
      borderWidth: 0,
      alignSelf: "stretch",
      borderColor: "inherit",
      width: "auto",
      height: "auto",
    };
  }
}
