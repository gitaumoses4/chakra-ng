import { QuillarConfig } from "./quillar.config";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { QuillarThemeConfig } from "@quillar/utils";

@NgModule()
export class ConfigModule {
  constructor(@Optional() @SkipSelf() parentModule?: ConfigModule) {
    if (parentModule) {
      throw new Error("QuillarConfigModule is already loaded. Import it in the AppModule only");
    }
  }

  public static forRoot(themeConfig: Partial<QuillarThemeConfig> = {}, config: Partial<QuillarConfig> = {}): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
        { provide: QuillarConfig, useValue: ConfigModule.getConfig(config) },
        { provide: QuillarThemeConfig, useValue: themeConfig },
      ],
    };
  }

  private static getConfig(config: Partial<QuillarConfig> = {}): QuillarConfig {
    const defaultConfig = new QuillarConfig();
    return { ...defaultConfig, ...config };
  }
}
