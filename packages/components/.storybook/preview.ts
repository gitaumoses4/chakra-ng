import { applicationConfig, moduleMetadata, Preview } from "@storybook/angular";
import { ConfigModule, SystemModule } from "@quillar/core";
import { IconsModule } from "@quillar/icons";
import { importProvidersFrom } from "@angular/core";

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(ConfigModule.forRoot(), IconsModule.withIcons({}))],
    }),
    moduleMetadata({
      imports: [SystemModule],
    }),
  ],
};

export default preview;
