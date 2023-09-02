import { QuillarConfig } from "./quillar.config";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { ThemeService } from "./theme.service";
import { ColorModeUtils } from "./color-mode.utils";
import { QuillarThemeConfig } from "./quillar-theme.config";
import { ChakraTheme } from "@chakra-ui/theme";
import { toCSSVar, WithCSSVar } from "@chakra-ui/styled-system";
import { ThemeExtensionConfig } from "./types";
import { extendBaseTheme, extendTheme } from "@chakra-ui/theme-utils";
import { THEME } from "./providers";
import { extensions } from "./extensions";

@NgModule()
export class QuillarConfigModule {
  constructor(@Optional() @SkipSelf() parentModule?: QuillarConfigModule) {
    if (parentModule) {
      throw new Error("QuillarConfigModule is already loaded. Import it in the AppModule only");
    }
  }

  public static forRoot(theme: Partial<QuillarThemeConfig> = {}, config: Partial<QuillarConfig> = {}): ModuleWithProviders<QuillarConfigModule> {
    return {
      ngModule: QuillarConfigModule,
      providers: [
        { provide: QuillarConfig, useValue: QuillarConfigModule.getConfig(config) },
        ThemeService,
        ColorModeUtils,
        { provide: THEME, useValue: QuillarConfigModule.getTheme(theme) },
      ],
    };
  }

  private static getConfig(config: Partial<QuillarConfig> = {}): QuillarConfig {
    const defaultConfig = new QuillarConfig();
    return { ...defaultConfig, ...config };
  }

  private static getTheme(config: Partial<QuillarThemeConfig> = {}): WithCSSVar<ChakraTheme> {
    const fullConfig = { ...new QuillarThemeConfig(), ...config };

    const extensions = [];

    for (const extensionConfig of fullConfig.extensions) {
      const extension = this.getExtension(extensionConfig);

      if (extension) {
        extensions.push(extension);
      }
    }

    return toCSSVar(
      fullConfig.useDefaultTheme
        ? extendTheme(fullConfig.theme || {}, ...extensions)
        : (extendBaseTheme(fullConfig.theme || {}, ...extensions) as any),
    );
  }

  private static getExtension(extensionConfig: ThemeExtensionConfig) {
    const extension = extensions[extensionConfig.type];

    if (extension) {
      return extension({ [extensionConfig.type]: extensionConfig.value, components: extensionConfig.components } as any);
    }

    return null;
  }
}
