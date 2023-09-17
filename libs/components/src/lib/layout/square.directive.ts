import { Directive, Input } from "@angular/core";
import { BaseStyledDirective, QuillarProps } from "@quillar/core";

/**
 * A square is a div with equal width and height
 */
@Directive({
  selector: "[qSquare]",
})
export class SquareDirective extends BaseStyledDirective {
  /**
   * The size (width and height) of the square
   */
  @Input() size?: QuillarProps["width"];

  /**
   * If `true`, the content will be centered in the square
   *
   * @default true
   */
  @Input() centerContent = true;

  getStyles(): QuillarProps | null | undefined {
    const styles: QuillarProps = {
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
