import { Inject, ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { CHAKRA_ICONS_TOKEN } from "./providers";
import * as chakraIcons from "./icons";

const defaultIcons = [chakraIcons];

@NgModule()
export class ChakraIconsModule {
  constructor(@Inject(CHAKRA_ICONS_TOKEN) icons: Record<string, string>) {
    if (Object.keys(icons).length === 0) {
      throw new Error("No icons provided. Please use ChakraIconsModule.withIcons() to provide icons.");
    }
  }

  public static register(icons: Record<string, string>): ModuleWithProviders<ChakraIconsModule> {
    return {
      ngModule: ChakraIconsModule,
      providers: [
        {
          provide: CHAKRA_ICONS_TOKEN,
          useFactory: (parentIcons: Record<string, string>[]) => ({
            ...(parentIcons || defaultIcons).reduce((acc, icons) => ({ ...acc, ...icons }), {}),
            ...icons,
          }),
          deps: [[CHAKRA_ICONS_TOKEN, new Optional(), new SkipSelf()]],
          multi: true,
        },
      ],
    };
  }
}
