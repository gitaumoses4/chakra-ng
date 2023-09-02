import { Dict } from "@chakra-ui/utils";
import { ThemeExtensionConfig } from "./types";

export class QuillarThemeConfig {
  public theme: Dict = {};

  public useDefaultTheme = true;

  public extensions: Array<ThemeExtensionConfig> = [];
}
