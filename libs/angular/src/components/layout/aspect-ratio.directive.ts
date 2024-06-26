import { Directive } from "@angular/core";
import { mapResponsive } from "@chakra-ui/utils";
import { BaseChakraComponent, ChakraStyles } from "../../core";

@Directive({
  selector: "[aspectRatio]",
})
export class AspectRatioDirective extends BaseChakraComponent {
  override ngOnChanges() {
    super.ngOnChanges();

    if (this.elementRef.nativeElement.children.length !== 1) {
      throw new Error("The element must have exactly one child.");
    }
  }

  getDefaultStyles(): ChakraStyles {
    return {
      position: "relative",
      _before: {
        height: 0,
        content: `""`,
        display: "block",
        paddingBottom: mapResponsive(this.aspectRatio || 4 / 3, (value) => `${(1 / value) * 100}%`),
      },
      __css: {
        "& > *:not(style)": {
          overflow: "hidden",
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        },
        "& > img, & > video": {
          objectFit: "cover",
        },
      },
    };
  }
}
