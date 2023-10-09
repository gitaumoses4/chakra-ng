import { Directive, Input } from "@angular/core";
import { BaseChakraComponent, ChakraStyles } from "../../core";

/**
 * A square is a div with equal width and height
 */
@Directive({
  selector: "[square]",
})
export class SquareDirective extends BaseChakraComponent {
  /**
   * The size (width and height) of the square
   */
  @Input() size?: ChakraStyles["width"];

  /**
   * If `true`, the content will be centered in the square
   *
   * @default true
   */
  @Input() centerContent = true;

  getBaseStyles(): ChakraStyles {
    const styles: ChakraStyles = {
      boxSize: this.size,
      flexShrink: 0,
      flexGrow: 0,
    };

    if (this.centerContent) {
      styles.display = "flex";
      styles.alignItems = "center";
      styles.justifyContent = "center";
    }

    return styles;
  }
}
