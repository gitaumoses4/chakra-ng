import { Directive, Input, OnChanges } from "@angular/core";
import { BaseStyledDirective, QuillarProps } from "@quillar/core";

@Directive({
  selector: "[qCenter]",
})
export class CenterLayoutDirective extends BaseStyledDirective {
  getStyles(): QuillarProps | null | undefined {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  }
}

const centerStyles = {
  horizontal: {
    insetStart: "50%",
    transform: "translateX(-50%)",
  },
  vertical: {
    top: "50%",
    transform: "translateY(-50%)",
  },
  both: {
    insetStart: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
};

@Directive({
  selector: "[qAbsoluteCenter]",
})
export class AbsoluteCenterLayoutDirective extends BaseStyledDirective {
  @Input() axis: "horizontal" | "vertical" | "both" = "both";

  getStyles(): QuillarProps | null | undefined {
    return {
      ...centerStyles[this.axis],
      position: "absolute",
    };
  }
}
