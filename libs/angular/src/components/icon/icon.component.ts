import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, inject, Input } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { CHAKRA_ICONS_TOKEN, ChakraIcon } from "@chakra-ng/icons";
import { BaseComponent, ChakraStyles, getStylesId, StylesService } from "../../core";
import { ResponsiveValue } from "@chakra-ui/styled-system";

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
export class IconComponent extends BaseComponent {
  private sanitizer = inject(DomSanitizer);
  private elementRef = inject(ElementRef);
  private stylesService = inject(StylesService);

  private readonly icons: Array<Record<string, string>> = inject(CHAKRA_ICONS_TOKEN);

  @Input() public boxSize: ResponsiveValue<string | number> = "1em";

  @HostBinding("style.--chakra-icon__stroke-width")
  @Input()
  strokeWidth?: string | number;

  @Input() public outline?: boolean;

  @HostBinding("innerHTML") template?: SafeHtml;

  @Input() set name(name: ChakraIcon | string) {
    name = this.outline ? `${name}Outline` : name;

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

  override ngOnInit() {
    super.ngOnInit();

    this.stylesService.applyChakraStyles(getStylesId(this.constructor.name), this.$styles, this.elementRef.nativeElement);
  }

  public override defaultStyles(): ChakraStyles {
    return {
      w: this.boxSize,
      h: this.boxSize,
      display: "inline-block",
      lineHeight: this.boxSize,
      flexShrink: 0,
      color: "currentColor",
      verticalAlign: "middle",
    };
  }
}
