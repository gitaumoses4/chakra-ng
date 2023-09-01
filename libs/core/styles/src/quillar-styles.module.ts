import { NgModule } from "@angular/core";
import { QuillarCacheService } from "./quillar-cache.service";
import { QuillarGlobalStylesService } from "./quillar-global-styles.service";
import { get, runIfFn } from "@chakra-ui/utils";
import { css } from "@chakra-ui/styled-system";
import { Interpolation } from "@emotion/serialize";
import { cssReset, vhPolyfill } from "./css-reset/styles";
import { QuillarConfig, ThemeService } from "@quillar/config";

@NgModule({
  providers: [QuillarCacheService, QuillarGlobalStylesService],
})
export class QuillarStylesModule {
  constructor(private stylesService: QuillarGlobalStylesService, private config: QuillarConfig, private themeService: ThemeService) {
    this.initialize();
  }

  private initialize() {
    this.applyCssVars();
    this.applyGlobalStyles();
    this.applyResetStyles();
  }

  private applyCssVars() {
    const selector = [this.config.cssVarsRoot, "[data-theme]"].join(",");

    const styles = (theme: any) => ({ [selector]: theme.__cssVars });

    this.stylesService.attachStyles(styles);
  }

  private applyGlobalStyles() {
    if (!this.config.disableGlobalStyle) {
      this.stylesService.attachStyles((theme: any) => {
        const styleObjectOrFn = get(theme, "styles.global");
        const globalStyles = runIfFn(styleObjectOrFn, { theme, colorMode: this.themeService.getColorMode() });
        if (!globalStyles) return undefined;
        const styles = css(globalStyles)(theme);
        return styles as Interpolation<any>;
      });
    }
  }

  private applyResetStyles() {
    this.stylesService.attachStyles(this.config.resetCSS ? cssReset(this.config.resetScope) : vhPolyfill);
  }
}
