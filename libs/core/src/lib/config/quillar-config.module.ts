import { QuillarConfig } from "./quillar.config";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { ThemeService } from "./theme.service";
import { ColorModeUtils } from "./color-mode.utils";
import { THEME } from "./providers";
import { generateTheme, QuillarThemeConfig } from "@quillar/utils";

@NgModule()
export class QuillarConfigModule {
  constructor(@Optional() @SkipSelf() parentModule?: QuillarConfigModule) {
    if (parentModule) {
      throw new Error("QuillarConfigModule is already loaded. Import it in the AppModule only");
    }
  }

  public static forRoot(
    themeConfig: Partial<QuillarThemeConfig> = {},
    config: Partial<QuillarConfig> = {},
  ): ModuleWithProviders<QuillarConfigModule> {
    return {
      ngModule: QuillarConfigModule,
      providers: [
        { provide: QuillarConfig, useValue: QuillarConfigModule.getConfig(config) },
        ThemeService,
        ColorModeUtils,
        { provide: THEME, useValue: generateTheme(themeConfig) },
      ],
    };
  }

  private static getConfig(config: Partial<QuillarConfig> = {}): QuillarConfig {
    const defaultConfig = new QuillarConfig();
    return { ...defaultConfig, ...config };
  }
}
