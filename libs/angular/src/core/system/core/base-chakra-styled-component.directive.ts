import { inject, Input, OnChanges } from "@angular/core";
import { ChakraStyles, ThemeService } from "@chakra-ng/angular";
import { BehaviorSubject, combineLatest, map, Observable } from "rxjs";
import { ResponsiveValue, ThemeTypings, ThemingProps } from "@chakra-ui/styled-system";
import { Dict } from "@chakra-ui/utils";
import { BaseStyledDirective } from "./base-styled.directive";

export abstract class BaseChakraStyledComponentDirective<ThemeComponent extends string> extends BaseStyledDirective implements OnChanges {
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

  @Input() public set chakraComponent(component: string) {
    this.$chakraComponent.next(component);
  }

  override ngOnChanges() {
    super.ngOnChanges();
    this.$componentProps.next(this);
  }

  override getBaseStyles(): Observable<ChakraStyles> {
    return combineLatest([this.$themeStyles, this.getComponentBaseStyles()]).pipe(
      map(([themeStyles, componentStyles]) => ({ ...componentStyles, __css: themeStyles })),
    );
  }

  public abstract getComponentBaseStyles(): Observable<ChakraStyles>;

  public component(): string {
    return "";
  }
}
