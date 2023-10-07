import { Directive, Input, OnChanges } from "@angular/core";
import { BehaviorSubject, combineLatest, map, Observable } from "rxjs";
import { ResponsiveValue, ThemeTypings, ThemingProps } from "@chakra-ui/styled-system";
import { Dict } from "@chakra-ui/utils";
import { BaseChakraDirective } from "./base-chakra.directive";
import { ChakraStyles } from "../types";

@Directive()
export abstract class BaseChakraStyledComponentDirective<ThemeComponent extends string> extends BaseChakraDirective implements OnChanges {
  private readonly $chakraComponent = new BehaviorSubject(this.component());
  private readonly $componentProps = new BehaviorSubject<ThemingProps & Dict>({});

  @Input() public variant?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeComponent]["variants"] : string
  >;
  @Input() public size?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeComponent]["sizes"] : string
  >;
  @Input() public colorScheme?: ThemeTypings["colorSchemes"];
  @Input() public orientation?: "vertical" | "horizontal";
  @Input() public styleConfig?: Record<string, any>;

  @Input()
  public set chakraComponent(component: string) {
    this.$chakraComponent.next(component);
  }

  override ngOnChanges() {
    super.ngOnChanges();
    this.$componentProps.next(this);
  }

  override getChakraStyles(): Observable<ChakraStyles> {
    const $themeStyles = this.themeService.getStyleConfig(this.$chakraComponent, this.getComponentProps());

    return combineLatest([$themeStyles, super.getChakraStyles()]).pipe(
      map(([themeStyles, chakraStyles]) => ({ ...this.getBaseStyles(), __css: themeStyles, ...chakraStyles })),
    );
  }

  public getComponentProps(): Observable<ThemingProps & Dict> {
    return this.$componentProps;
  }

  public component(): string {
    return "";
  }
}
