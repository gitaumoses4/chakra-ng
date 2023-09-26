import { ColorModeManager, LocalStorageManager } from "./color-mode.manager";
import { PartialChakraTheme, ThemeExtensionConfig } from "../../utils";

export class ChakraConfig {
  public theme: PartialChakraTheme = {};

  public useDefaultTheme = true;

  public extensions: Array<ThemeExtensionConfig> = [];

  public icons: Record<string, string> = {};

  /**
   * The element to attach the CSS custom properties to.
   * @default ":host, :root"
   */
  public cssVarsRoot = ":host, :root";

  /**
   * Common z-index to use for `Portal`
   */
  public portalZIndex?: number;
  /**
   * If `true`, `CSSReset` component will be mounted to help
   * you reset browser styles
   *
   * @default true
   */
  public resetCSS = true;
  /**
   * The selector to scope the css reset styles to.
   */
  public resetScope?: string;
  /**
   * manager to persist a users color mode preference in
   *
   * omit if you don't render server-side
   * for SSR: choose `cookieStorageManager`
   *
   * @default localStorageManager
   */
  public colorModeManager: ColorModeManager = new LocalStorageManager();

  /**
   * If `true`, Chakra will not mount the global styles defined in the theme.
   */
  public disableGlobalStyle = false;
}
