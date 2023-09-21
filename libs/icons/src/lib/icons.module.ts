import { Inject, ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { CHAKRA_NG_ICONS_TOKEN } from "./providers";
import * as chakraNgIcons from "./icons";

const defaultIcons = [chakraNgIcons];

@NgModule()
export class IconsModule {
  constructor(@Inject(CHAKRA_NG_ICONS_TOKEN) icons: Record<string, string>) {
    if (Object.keys(icons).length === 0) {
      throw new Error("No icons provided. Please use IconsModule.withIcons() to provide icons.");
    }
  }

  public static withIcons(icons: Record<string, string>): ModuleWithProviders<IconsModule> {
    return {
      ngModule: IconsModule,
      providers: [
        {
          provide: CHAKRA_NG_ICONS_TOKEN,
          useFactory: (parentIcons: Record<string, string>[]) => ({
            ...(parentIcons || defaultIcons).reduce((acc, icons) => ({ ...acc, ...icons }), {}),
            ...icons,
          }),
          deps: [[CHAKRA_NG_ICONS_TOKEN, new Optional(), new SkipSelf()]],
          multi: true,
        },
      ],
    };
  }
}
