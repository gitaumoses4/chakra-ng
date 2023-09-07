import { QuillarTheme, ThemeExtensionConfig } from "./types";
import { DeepPartial } from "../shared-utils";

export class QuillarThemeConfig {
  public theme: DeepPartial<QuillarTheme> | undefined = undefined;

  public useDefaultTheme = true;

  public extensions: Array<ThemeExtensionConfig> = [];
}
