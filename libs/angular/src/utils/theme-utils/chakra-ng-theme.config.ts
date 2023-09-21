import { PartialChakraTheme, ThemeExtensionConfig } from "./types";

export class ChakraNgThemeConfig {
  public theme: PartialChakraTheme = {};

  public useDefaultTheme = true;

  public extensions: Array<ThemeExtensionConfig> = [];
}
