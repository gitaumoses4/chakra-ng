import { Component, Input } from "@angular/core";
import { BaseChakraComponent } from "./base-chakra.component";
import { BehaviorSubject, combineLatest, map, Observable, of } from "rxjs";
import { ResponsiveValue, ThemeTypings, ThemingProps } from "@chakra-ui/styled-system";
import { Dict } from "@chakra-ui/utils";
import { ChakraStyles } from "../types";

@Component({ template: "", standalone: true })
export abstract class BaseChakraStyledComponent<ThemeComponent extends string> extends BaseChakraComponent {
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

  override ngOnChanges() {
    super.ngOnChanges();
    this.$componentProps.next(this);
  }

  override getChakraStyles(): Observable<ChakraStyles> {
    const $themeStyles = this.themeService.getStyleConfig(of(this.component()), this.getComponentProps());

    return combineLatest([$themeStyles, super.getChakraStyles()]).pipe(
      map(([themeStyles, chakraStyles]) => ({ ...this.getDefaultStyles(), __css: themeStyles, ...chakraStyles })),
    );
  }

  public getComponentProps(): Observable<ThemingProps & Dict> {
    return this.$componentProps;
  }

  public abstract component(): string;
}
