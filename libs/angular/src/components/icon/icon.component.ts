import { ChangeDetectionStrategy, Component, inject, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { CHAKRA_NG_ICONS_TOKEN, ChakraNgIcons } from "@chakra-ng/icons";
import { BaseStyledComponent, ChakraStyles } from "../../core";

const fallbackIcon = `
    <g stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" fill="none" d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"></path>
      <path fill="currentColor" stroke-linecap="round" d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"></path>
      <circle fill="none" stroke-miterlimit="10" cx="12" cy="12" r="11.25"></circle>
    </g>
`;

@Component({
  selector: "chakra-icon",
  template: ` <svg
    fill="currentColor"
    [chakraStyles]="$styles | async"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    [innerHTML]="template"
  ></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent extends BaseStyledComponent {
  private sanitizer = inject(DomSanitizer);

  public template = this.sanitizer.bypassSecurityTrustHtml(fallbackIcon);
  private readonly icons: Array<Record<string, string>> = inject(CHAKRA_NG_ICONS_TOKEN);

  @Input() set name(name: ChakraNgIcons | string) {
    for (const icons of [...this.icons].reverse()) {
      if (icons[name]) {
        this.template = this.sanitizer.bypassSecurityTrustHtml(icons[name]);
        return;
      }
    }
  }

  @Input() set svg(svgString: string) {
    this.template = this.sanitizer.bypassSecurityTrustHtml(svgString);
  }

  public override defaultStyles(): ChakraStyles {
    return {
      w: "1em",
      h: "1em",
      display: "inline-block",
      lineHeight: "1em",
      flexShrink: 0,
      color: "currentColor",
      verticalAlign: "middle",
    };
  }

  override component(): string {
    return "Icon";
  }
}