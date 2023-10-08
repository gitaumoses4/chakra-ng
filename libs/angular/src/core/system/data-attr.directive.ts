import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[dataAttr]",
})
export class DataAttrDirective {
  constructor(private elementRef: ElementRef) {}

  @Input()
  public set dataAttr(value: { [kData: string]: any }) {
    Object.entries(value).forEach(([key, val]) => {
      if (val) {
        this.elementRef.nativeElement.dataset[key] = val;
      }
    });
  }
}
