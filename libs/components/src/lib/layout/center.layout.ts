import { Directive, Input } from "@angular/core";
import { BaseStyledDirective, QuillarStyles } from "@quillar/core";

@Directive({
  standalone: true,
  selector: "[qCenter]",
})
export class CenterLayout extends BaseStyledDirective {
  getStyles(): QuillarStyles | null | undefined {
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
  standalone: true,
  selector: "[qAbsoluteCenter]",
})
export class AbsoluteCenterLayout extends BaseStyledDirective {
  @Input() axis: "horizontal" | "vertical" | "both" = "both";

  getStyles(): QuillarStyles | null | undefined {
    return {
      ...centerStyles[this.axis],
      position: "absolute",
    };
  }
}
