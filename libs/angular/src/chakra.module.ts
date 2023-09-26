import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { ChakraConfig, ColorModeUtils, StylesService, ThemeService } from "./core";
import { Interpolation } from "@emotion/serialize";
import { get, runIfFn } from "@chakra-ui/utils";
import { css } from "@chakra-ui/styled-system";
import { cssReset, vhPolyfill } from "./core/styles/css-reset/styles";

@NgModule()
export class ChakraModule {
  constructor(
    private stylesService: StylesService,
    private config: ChakraConfig,
    private themeService: ThemeService,
    @Optional() @SkipSelf() parentModule?: ChakraModule,
  ) {
    if (parentModule) {
      throw new Error("ThemeModule is already loaded. Import it in the AppModule only");
    }
    this.attachGlobalStyles();
  }

  public static forRoot(config: Partial<ChakraConfig> = {}): ModuleWithProviders<ChakraModule> {
    return {
      ngModule: ChakraModule,
      providers: [{ provide: ChakraConfig, useValue: ChakraModule.getConfig(config) }, ThemeService, ColorModeUtils, StylesService],
    };
  }

  private static getConfig(config: Partial<ChakraConfig> = {}): ChakraConfig {
    const defaultConfig = new ChakraConfig();
    return { ...defaultConfig, ...config };
  }

  private attachGlobalStyles() {
    const styles: Array<Interpolation<any> | TemplateStringsArray> = [];

    const selector = [this.config.cssVarsRoot, "[data-theme]"].join(",");

    styles.push((theme: any) => ({ [selector]: theme.__cssVars }));

    if (!this.config.disableGlobalStyle) {
      styles.push((theme: any) => {
        const styleObjectOrFn = get(theme, "styles.global");
        const globalStyles = runIfFn(styleObjectOrFn, { theme, colorMode: this.themeService.getColorMode() });
        if (!globalStyles) return undefined;
        const styles = css(globalStyles)(theme);
        return styles as Interpolation<any>;
      });
    }

    styles.push(this.config.resetCSS ? cssReset(this.config.resetScope) : vhPolyfill);

    this.stylesService.attachGlobalStyles(styles);
  }
}
