import { Component, Input, TemplateRef } from "@angular/core";
import { SystemProps } from "@chakra-ui/styled-system";
import { BaseChakraComponent, ChakraStyles } from "../../core";

@Component({
  selector: "chakra-button-spinner",
  template: `
    <ng-container *ngIf="spinner; else defaultSpinner">
      <ng-container *ngTemplateOutlet="spinner"></ng-container>
    </ng-container>
    <ng-template #defaultSpinner>
      <chakra-spinner [width]="'1em'" [height]="'1em'"></chakra-spinner>
    </ng-template>
  `,
})
export class ButtonSpinnerComponent extends BaseChakraComponent {
  @Input() public label?: string;

  @Input() public spacing?: SystemProps["marginRight"] = "0.5rem";

  @Input() public placement?: "start" | "end" = "end";

  @Input() public spinner?: TemplateRef<any>;

  override getDefaultStyles(): ChakraStyles {
    const marginProp = this.placement === "start" ? "marginRight" : "marginLeft";

    return {
      display: "flex",
      alignItems: "center",
      position: this.label ? "relative" : "absolute",
      [marginProp]: this.label ? this.spacing : 0,
      fontSize: "1em",
      lineHeight: "normal",
    };
  }

  override getDefaultClassName(): string {
    return "chakra-button__spinner";
  }
}
