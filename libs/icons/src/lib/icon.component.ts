import { ChangeDetectionStrategy, Component, HostBinding, inject, Input } from "@angular/core";
import { QuillarIcons } from "./types";
import * as icons from "./icons";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "q-icon",
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  private _size = "1em";
  private sanitizer = inject(DomSanitizer);

  @Input() set name(name: QuillarIcons) {
    this.template = this.sanitizer.bypassSecurityTrustHtml(icons[name]);
  }

  @HostBinding("innerHTML") template?: SafeHtml;

  @HostBinding("style.--quillar-icon__size")
  @Input()
  set size(size: string) {
    this._size = coerceCssPixelValue(size);
  }

  public get size(): string {
    return this._size;
  }

  @HostBinding("style.--quillar-icon__stroke-width")
  @Input()
  strokeWidth?: string | number;

  @HostBinding("style.color")
  @Input()
  color?: string;
}

function coerceCssPixelValue(value: string): string {
  return value == null ? "" : /^\d+$/.test(value) ? `${value}px` : value;
}
