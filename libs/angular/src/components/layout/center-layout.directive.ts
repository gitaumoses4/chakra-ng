import { Directive, Input } from "@angular/core";
import { BaseChakraDirective, ChakraStyles } from "../../core";

@Directive({
  selector: "[center]",
})
export class CenterLayoutDirective extends BaseChakraDirective {
  getBaseStyles(): ChakraStyles {
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
  selector: "[absoluteCenter]",
})
export class AbsoluteCenterLayoutDirective extends BaseChakraDirective {
  @Input() axis: "horizontal" | "vertical" | "both" = "both";

  getBaseStyles(): ChakraStyles {
    return {
      ...centerStyles[this.axis],
      position: "absolute",
    };
  }
}
