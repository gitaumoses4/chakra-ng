import { Directive, Input } from "@angular/core";
import { BaseChakraComponent } from "./base-chakra.component";
import { BehaviorSubject, combineLatest, map, Observable, of } from "rxjs";
import { ResponsiveValue, ThemeTypings, ThemingProps } from "@chakra-ui/styled-system";
import { Dict } from "@chakra-ui/utils";
import { ChakraStyles } from "../types";

@Directive()
export abstract class BaseChakraStyledComponent<ThemeKey extends string> extends BaseChakraComponent {
  @Input() public variant?: ResponsiveValue<
    ThemeKey extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeKey]["variants"] : string
  >;
  @Input() public size?: ResponsiveValue<ThemeKey extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeKey]["sizes"] : string>;
  @Input() public colorScheme?: ThemeTypings["colorSchemes"];
  @Input() public orientation?: "vertical" | "horizontal";
  @Input() public styleConfig?: Record<string, any>;
  private readonly $componentProps = new BehaviorSubject<ThemingProps & Dict>({});

  override ngOnChanges() {
    super.ngOnChanges();
    this.$componentProps.next(this);
  }

  override getChakraStyles(): Observable<ChakraStyles> {
    const $themeStyles = this.themeService.getStyleConfig(this.getThemeKeyObservable(), this.getComponentProps());

    return combineLatest([$themeStyles, super.getChakraStyles()]).pipe(
      map(([themeStyles, chakraStyles]) => ({ ...this.getDefaultStyles(), __css: themeStyles, ...chakraStyles })),
    );
  }

  public getComponentProps(): Observable<ThemingProps & Dict> {
    return this.$componentProps;
  }

  public getThemeKeyObservable(): Observable<string> {
    return of(this.getThemeKey());
  }

  public abstract getThemeKey(): string;
}
