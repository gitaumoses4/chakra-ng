import { QuillarConfig } from "./quillar.config";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ThemeService } from "./theme.service";
import { ColorModeUtils } from "./color-mode.utils";

@NgModule()
export class QuillarConfigModule {
  static forRoot(config: any = {}): ModuleWithProviders<QuillarConfigModule> {
    const defaultConfig = new QuillarConfig();
    return {
      ngModule: QuillarConfigModule,
      providers: [
        {
          provide: QuillarConfig,
          useValue: { ...defaultConfig, ...config },
        },
        ThemeService,
        ColorModeUtils,
      ],
    };
  }
}
