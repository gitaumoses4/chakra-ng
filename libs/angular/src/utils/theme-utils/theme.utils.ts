import { toCSSVar, WithCSSVar } from "@chakra-ui/styled-system";
import { ChakraTheme } from "@chakra-ui/theme";
import { extendBaseTheme, extendTheme } from "@chakra-ui/theme-utils";
import { ThemeExtensionConfig } from "./types";
import { ChakraNgThemeConfig } from "./chakra-ng-theme.config";
import { extensions } from "./extensions";

function getExtension(extensionConfig: ThemeExtensionConfig) {
  const extension = extensions[extensionConfig.type];

  if (extension) {
    return extension({ [extensionConfig.type]: extensionConfig.value, components: extensionConfig.components } as any);
  }

  return null;
}

export function generateTheme(config: Partial<ChakraNgThemeConfig> = {}): WithCSSVar<ChakraTheme> {
  const fullConfig = { ...new ChakraNgThemeConfig(), ...config };

  const extensions = [];

  for (const extensionConfig of fullConfig.extensions) {
    const extension = getExtension(extensionConfig);

    if (extension) {
      extensions.push(extension);
    }
  }

  return toCSSVar(
    fullConfig.useDefaultTheme ? extendTheme(fullConfig.theme || {}, ...extensions) : (extendBaseTheme(fullConfig.theme || {}, ...extensions) as any),
  );
}
