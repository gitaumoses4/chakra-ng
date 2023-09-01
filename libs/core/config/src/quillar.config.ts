import { Theme, theme as defaultTheme } from "@chakra-ui/theme";
import { Dict } from "@chakra-ui/utils";
import { Injectable } from "@angular/core";
import { ColorModeManager, LocalStorageManager } from "@quillar/color-mode";

@Injectable({ providedIn: "root" })
export class QuillarConfig {
  /**
   * The element to attach the CSS custom properties to.
   * @default ":host, :root"
   */
  cssVarsRoot = ":host, :root";

  /**
   * a theme. if omitted, uses the default theme provided by chakra
   */
  public theme: Dict & Theme = defaultTheme;

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
