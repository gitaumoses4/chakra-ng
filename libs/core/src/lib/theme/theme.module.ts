import { QuillarConfig } from "./quillar.config";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { QuillarThemeConfig } from "@quillar/utils";
import { ThemeService } from "./theme.service";
import { ColorModeUtils } from "./color-mode.utils";
import { CacheService, StylesService } from "../styles";
import { Interpolation } from "@emotion/serialize";
import { get, runIfFn } from "@chakra-ui/utils";
import { css } from "@chakra-ui/styled-system";
import { cssReset, vhPolyfill } from "../styles/css-reset/styles";

@NgModule()
export class ThemeModule {
  constructor(
    private stylesService: StylesService,
    private config: QuillarConfig,
    private themeService: ThemeService,
    @Optional() @SkipSelf() parentModule?: ThemeModule,
  ) {
    if (parentModule) {
      throw new Error("ThemeModule is already loaded. Import it in the AppModule only");
    }
    this.attachGlobalStyles();
  }

  public static forRoot(themeConfig: Partial<QuillarThemeConfig> = {}, config: Partial<QuillarConfig> = {}): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        { provide: QuillarConfig, useValue: ThemeModule.getConfig(config) },
        { provide: QuillarThemeConfig, useValue: themeConfig },
        ThemeService,
        ColorModeUtils,
        StylesService,
        CacheService,
      ],
    };
  }

  private static getConfig(config: Partial<QuillarConfig> = {}): QuillarConfig {
    const defaultConfig = new QuillarConfig();
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
