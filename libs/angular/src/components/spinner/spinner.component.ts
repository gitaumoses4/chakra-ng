import { Component, Input } from "@angular/core";
import { BaseChakraStyledComponent, ChakraStyles } from "../../core";
import { keyframes } from "@emotion/css";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

@Component({
  selector: "chakra-spinner",
  templateUrl: "./spinner.component.html",
})
export class SpinnerComponent extends BaseChakraStyledComponent<"Spinner"> {
  @Input() public emptyColor: string = "transparent";

  @Input() public thickness = "2px";

  @Input() public speed = "0.45s";

  @Input() public label: string | undefined = "Loading...";

  component(): string {
    return "Spinner";
  }

  getDefaultStyles(): ChakraStyles {
    return {
      display: "inline-block",
      borderColor: "currentColor",
      borderStyle: "solid",
      borderRadius: "99999px",
      borderWidth: this.thickness,
      borderBottomColor: this.emptyColor,
      borderLeftColor: this.emptyColor,
      animation: `${spin} ${this.speed} linear infinite`,
    };
  }
}
