import { Directive, inject, Input, OnChanges } from "@angular/core";
import { ThemeService } from "../theme";
import { BehaviorSubject } from "rxjs";
import { ResponsiveValue, ThemeTypings, ThemingProps } from "@chakra-ui/styled-system";
import { Dict } from "@chakra-ui/utils";
import { BaseStyledDirective } from "./base-styled.directive";
import { ChakraStyles } from "./types";

@Directive({
  selector: "[chakraComponent]",
})
export class ChakraComponentDirective<ThemeComponent extends string> extends BaseStyledDirective implements OnChanges {
  private readonly themeService = inject(ThemeService);
  private readonly $chakraComponent = new BehaviorSubject(this.component());
  private readonly $componentProps = new BehaviorSubject<ThemingProps & Dict>({});
  private readonly $themeStyles = this.themeService.getStyleConfig(this.$chakraComponent, this.$componentProps);

  @Input() public variant?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeComponent]["variants"] : string
  >;
  @Input() public size?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeComponent]["sizes"] : string
  >;
  @Input() public colorScheme?: ThemeTypings["colorSchemes"];
  @Input() public orientation?: "vertical" | "horizontal";
  @Input() public styleConfig?: Record<string, any>;

  override ngOnInit() {
    super.ngOnInit();

    this.$themeStyles.subscribe((themeStyles) => {
      this.$styles.next({ ...this.getStyles(), __css: themeStyles });
    });
  }

  @Input() public set chakraComponent(component: string) {
    this.$chakraComponent.next(component);
  }

  override ngOnChanges() {
    super.ngOnChanges();
    this.$componentProps.next(this);
  }

  public component(): string {
    return "";
  }

  getStyles(): ChakraStyles {
    return {};
  }
}
