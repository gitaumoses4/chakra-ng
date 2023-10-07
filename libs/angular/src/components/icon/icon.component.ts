import { ChangeDetectionStrategy, Component, HostBinding, inject, Input } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { CHAKRA_ICONS_TOKEN, ChakraIcon } from "@chakra-ng/icons";
import { BaseChakraComponent, ChakraStyles } from "../../core";

const fallbackIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" style="stroke-width:var(--chakra-icon__stroke-width, 1.5)">
    <g stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" fill="none" d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"></path>
      <path fill="currentColor" stroke-linecap="round" d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"></path>
      <circle fill="none" stroke-miterlimit="10" cx="12" cy="12" r="11.25"></circle>
    </g>
</svg>
`;

@Component({
  selector: "chakra-icon",
  template: "",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent extends BaseChakraComponent {
  private sanitizer = inject(DomSanitizer);

  private readonly icons: Array<Record<string, string>> = inject(CHAKRA_ICONS_TOKEN);

  @HostBinding("style.--chakra-icon__stroke-width")
  @Input()
  strokeWidth?: string | number;

  @Input() public solid: boolean = true;

  @HostBinding("innerHTML") template?: SafeHtml;

  @Input() set name(name: ChakraIcon | string) {
    name = !this.solid ? `${name}Outline` : name;

    for (const icons of [...this.icons].reverse()) {
      if (icons[name]) {
        this.template = this.sanitizer.bypassSecurityTrustHtml(icons[name]);
        return;
      }
    }
    this.template = this.sanitizer.bypassSecurityTrustHtml(fallbackIcon);
  }

  @Input() set svg(svgString: string) {
    this.template = this.sanitizer.bypassSecurityTrustHtml(svgString);
  }

  public override getDefaultStyles(): ChakraStyles {
    return {
      w: this.boxSize || "1em",
      h: this.boxSize || "1em",
      display: "inline-block",
      lineHeight: this.boxSize || "1em",
      flexShrink: 0,
      color: "currentColor",
      verticalAlign: "middle",
    };
  }
}
