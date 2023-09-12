import { Directive, Input } from "@angular/core";
import { BaseStyledDirective, QuillarStyles } from "@quillar/core";

/**
 * A square is a div with equal width and height
 */
@Directive({
  standalone: true,
  selector: "[qSquare]",
})
export class Square extends BaseStyledDirective {
  /**
   * The size (width and height) of the square
   */
  @Input() size?: QuillarStyles["width"];

  /**
   * If `true`, the content will be centered in the square
   *
   * @default true
   */
  @Input() centerContent = true;

  getStyles(): QuillarStyles | null | undefined {
    const styles: QuillarStyles = {
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
