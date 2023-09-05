import { ChangeDetectionStrategy, Component, inject, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { StyledComponent, SystemModule } from "@quillar/core";
import { SystemStyleObject } from "@chakra-ui/styled-system";
import { QUILLAR_ICONS_TOKEN, QuillarIcons } from "@quillar/icons";

const fallbackIcon = `
    <g stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" fill="none" d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"></path>
      <path fill="currentColor" stroke-linecap="round" d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"></path>
      <circle fill="none" stroke-miterlimit="10" cx="12" cy="12" r="11.25"></circle>
    </g>
`;

@Component({
  standalone: true,
  selector: "q-icon",
  template: ` <svg fill="currentColor" [qStyles]="styles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" [innerHTML]="template"></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SystemModule],
})
export class IconComponent extends StyledComponent {
  private sanitizer = inject(DomSanitizer);

  public template = this.sanitizer.bypassSecurityTrustHtml(fallbackIcon);
  private readonly icons: Array<Record<string, string>> = inject(QUILLAR_ICONS_TOKEN);

  @Input() set name(name: QuillarIcons | string) {
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

  public override buildStyles(themeStyles: SystemStyleObject): SystemStyleObject {
    return {
      w: "1em",
      h: "1em",
      display: "inline-block",
      lineHeight: "1em",
      flexShrink: 0,
      color: this.styles.color || "currentColor",
      verticalAlign: "middle",
      ...themeStyles,
    };
  }

  override component(): string {
    return "Icon";
  }
}
