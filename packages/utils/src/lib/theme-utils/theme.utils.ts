import { toCSSVar, WithCSSVar } from "@chakra-ui/styled-system";
import { ChakraTheme } from "@chakra-ui/theme";
import { extendBaseTheme, extendTheme } from "@chakra-ui/theme-utils";
import { ThemeExtensionConfig } from "./types";
import { QuillarThemeConfig } from "./quillar-theme.config";
import { defaultTheme } from "./default.theme";
import { extensions } from "./extensions";

function getExtension(extensionConfig: ThemeExtensionConfig) {
  const extension = extensions[extensionConfig.type];

  if (extension) {
    return extension({ [extensionConfig.type]: extensionConfig.value, components: extensionConfig.components } as any);
  }

  return null;
}

export function generateTheme(config: Partial<QuillarThemeConfig> = {}): WithCSSVar<ChakraTheme> {
  const fullConfig = { ...new QuillarThemeConfig(), ...config };

  const extensions = [];

  for (const extensionConfig of fullConfig.extensions) {
    const extension = getExtension(extensionConfig);

    if (extension) {
      extensions.push(extension);
    }
  }

  return toCSSVar(
    fullConfig.useDefaultTheme
      ? extendTheme(defaultTheme, fullConfig.theme || {}, ...extensions)
      : (extendBaseTheme(defaultTheme, fullConfig.theme || {}, ...extensions) as any),
  );
}
