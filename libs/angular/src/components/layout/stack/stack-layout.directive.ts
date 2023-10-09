import { ChangeDetectorRef, Directive, Input, OnChanges, TemplateRef } from "@angular/core";
import { ResponsiveValue, SystemProps } from "@chakra-ui/styled-system";
import { getDividerStyles } from "./stack-utils";
import { BaseChakraComponent, ChakraStyles } from "../../../core";

export type StackDirection = ResponsiveValue<"row" | "column" | "row-reverse" | "column-reverse">;

@Directive({
  selector: "[stack],[hStack],[vStack]",
})
export class StackLayoutDirective extends BaseChakraComponent implements OnChanges {
  @Input() align?: SystemProps["alignItems"];

  @Input() justify?: SystemProps["justifyContent"];

  @Input() wrap?: SystemProps["flexWrap"];

  @Input() spacing?: SystemProps["margin"] = "0.5rem";

  @Input() direction?: StackDirection;

  @Input() divider?: TemplateRef<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  override ngOnChanges() {
    super.ngOnChanges();

    if (this.divider) {
      this.applyDivider();
    }

    this.changeDetectorRef.detectChanges();
  }

  private applyDivider() {
    if (!this.divider) return;
    const element = this.elementRef.nativeElement as HTMLElement;

    const children = element.children;

    for (let i = 0; i < children.length - 1; i++) {
      const child = children[i];

      const styles = {
        __css: getDividerStyles({ spacing: this.spacing, direction: this.getDirection() }),
      };

      if (child.hasAttribute("data-divider")) {
        this.applyChakraStyles(styles, child as HTMLElement);
        continue;
      }

      const view = this.divider.createEmbeddedView(null);
      view.detectChanges();

      let divider = view.rootNodes[0] as HTMLElement;

      if (view.rootNodes.length > 1) {
        divider = document.createElement("div");
        divider.append(...view.rootNodes);
      }

      divider.setAttribute("data-divider", "");

      this.applyChakraStyles(styles, divider);

      element.insertBefore(divider, child.nextSibling);
    }
  }

  private getDirection() {
    const element = this.elementRef.nativeElement as HTMLElement;

    if (element.hasAttribute("hStack")) {
      return "row";
    } else if (element.hasAttribute("vStack")) {
      return "column";
    }

    return this.direction || "row";
  }

  public override getBaseStyles(): ChakraStyles {
    return {
      display: "flex",
      alignItems: this.align || "center",
      justifyContent: this.justify,
      flexDirection: this.getDirection(),
      flexWrap: this.wrap,
      gap: this.divider ? undefined : this.spacing || "0.5rem",
    };
  }
}
