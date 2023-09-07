import { NgModule } from "@angular/core";
import { CacheService } from "./cache.service";
import { StylesService } from "./styles.service";
import { get, runIfFn } from "@chakra-ui/utils";
import { css } from "@chakra-ui/styled-system";
import { Interpolation } from "@emotion/serialize";
import { cssReset, vhPolyfill } from "./css-reset/styles";
import { QuillarConfig } from "../config";
import { ThemeService } from "../theme";

@NgModule({
  providers: [CacheService, StylesService],
})
export class StylesModule {
  constructor(private stylesService: StylesService, private config: QuillarConfig, private themeService: ThemeService) {
    this.attachGlobalStyles();
  }

  private attachGlobalStyles() {
    const styles: Array<Interpolation<any> | TemplateStringsArray> = [];

    const selector = [this.config.cssVarsRoot, "[data-theme]"].join(",");

    styles.push((theme: any) => ({ [selector]: theme.__cssVars }));

    if (!this.config.disableGlobalStyle) {
      styles.push((theme: any) => {
        const styleObjectOrFn = get(theme, "styles.global");
        const globalStyles = runIfFn(styleObjectOrFn, { theme, colorMode: this.themeService.getColorMode() });
        if (!globalStyles) return undefined;
        const styles = css(globalStyles)(theme);
        return styles as Interpolation<any>;
      });
    }

    styles.push(this.config.resetCSS ? cssReset(this.config.resetScope) : vhPolyfill);

    this.stylesService.attachGlobalStyles(styles);
  }
}
