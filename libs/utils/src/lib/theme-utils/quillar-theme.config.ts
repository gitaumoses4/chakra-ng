import { PartialQuillarTheme, ThemeExtensionConfig } from "./types";

export class QuillarThemeConfig {
  public theme: PartialQuillarTheme = {};

  public useDefaultTheme = true;

  public extensions: Array<ThemeExtensionConfig> = [];
}
