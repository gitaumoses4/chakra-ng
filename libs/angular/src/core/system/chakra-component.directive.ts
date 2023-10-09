import { Directive, Input } from "@angular/core";
import { BaseChakraStyledComponent } from "./core";
import { ChakraStyles } from "./types";
import { BehaviorSubject, Observable } from "rxjs";

@Directive({
  selector: "[chakraComponent]",
})
export class ChakraComponentDirective<ThemeKey extends string> extends BaseChakraStyledComponent<ThemeKey> {
  private readonly $chakraComponent = new BehaviorSubject<string>("");

  @Input()
  public set chakraComponent(component: string) {
    this.$chakraComponent.next(component);
  }

  override getDefaultStyles(): ChakraStyles {
    return {};
  }

  override getThemeKeyObservable(): Observable<string> {
    return this.$chakraComponent;
  }

  override getThemeKey(): string {
    return "";
  }
}
