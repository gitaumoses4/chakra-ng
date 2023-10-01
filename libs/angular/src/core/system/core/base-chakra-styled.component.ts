import { Component, inject, Input } from "@angular/core";
import { BaseChakraComponent } from "./base-chakra.component";
import { ThemeService } from "../../theme";
import { BehaviorSubject, combineLatest, map, Observable, of } from "rxjs";
import { ResponsiveValue, ThemeTypings, ThemingProps } from "@chakra-ui/styled-system";
import { Dict } from "@chakra-ui/utils";
import { BaseChakraStyles, ChakraStyles } from "../types";

@Component({ template: "", standalone: true })
export abstract class BaseChakraStyledComponent<ThemeComponent extends string> extends BaseChakraComponent {
  private readonly themeService = inject(ThemeService);
  private readonly $chakraComponent = new BehaviorSubject(this.component());
  private readonly $componentProps = new BehaviorSubject<ThemingProps & Dict>({});
  public readonly $themeStyles = this.themeService.getStyleConfig(this.$chakraComponent, this.$componentProps);

  @Input() public variant?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeComponent]["variants"] : string
  >;
  @Input() public size?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeComponent]["sizes"] : string
  >;
  @Input() public colorScheme?: ThemeTypings["colorSchemes"];
  @Input() public orientation?: "vertical" | "horizontal";
  @Input() public styleConfig?: Record<string, any>;

  override ngOnChanges() {
    super.ngOnChanges();
    this.$componentProps.next(this);
  }

  override getBaseStyles(): Observable<ChakraStyles> {
    return combineLatest([this.$themeStyles, this.getComponentBaseStylesObservable()]).pipe(
      map(([themeStyles, componentStyles]) => ({ ...componentStyles, __css: themeStyles })),
    );
  }

  private getComponentBaseStylesObservable(): Observable<ChakraStyles> {
    const componentStyles = this.getComponentBaseStyles();
    return (componentStyles instanceof Observable ? componentStyles : of(componentStyles)).pipe(map((styles) => styles || {}));
  }

  public abstract getComponentBaseStyles(): Observable<BaseChakraStyles> | BaseChakraStyles;

  public abstract component(): string;
}
