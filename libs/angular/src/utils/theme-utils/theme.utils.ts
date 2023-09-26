import { toCSSVar, WithCSSVar } from "@chakra-ui/styled-system";
import { ChakraTheme } from "@chakra-ui/theme";
import { extendBaseTheme, extendTheme } from "@chakra-ui/theme-utils";
import { ThemeExtensionConfig } from "./types";
import { extensions } from "./extensions";
import { ChakraConfig } from "../../core";

function getExtension(extensionConfig: ThemeExtensionConfig) {
  const extension = extensions[extensionConfig.type];

  if (extension) {
    return extension({ [extensionConfig.type]: extensionConfig.value, components: extensionConfig.components } as any);
  }

  return null;
}

export function generateTheme(config: Partial<ChakraConfig> = {}): WithCSSVar<ChakraTheme> {
  const fullConfig = { theme: config.theme || {}, useDefaultTheme: config.useDefaultTheme, extensions: config.extensions || [] };

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
