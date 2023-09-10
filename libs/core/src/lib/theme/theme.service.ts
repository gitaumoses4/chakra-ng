import { Injectable } from "@angular/core";
import { Dict, filterUndefined, get, mergeWith } from "@chakra-ui/utils";
import { resolveStyleConfig, ThemingProps, WithCSSVar } from "@chakra-ui/styled-system";
import { omit } from "@chakra-ui/object-utils";
import { BehaviorSubject, combineLatest, Subscription } from "rxjs";
import { ColorMode, ColorModeWithSystem } from "./types";
import { ColorModeUtils } from "./color-mode.utils";
import { QuillarConfig } from "../config";
import { generateTheme, QuillarTheme, QuillarThemeConfig } from "@quillar/utils";
import { QuillarStyleObject } from "../system";

@Injectable({ providedIn: "root" })
export class ThemeService {
  private $theme = new BehaviorSubject<WithCSSVar<QuillarTheme>>(generateTheme(this.themeConfig));
  private $resolvedColorMode = new BehaviorSubject<ColorMode | undefined>(undefined);
  private subscriptions: Subscription[] = [];

  public $colorMode = new BehaviorSubject<ColorMode>(this.getInitialColorMode());

  public $changes = combineLatest([this.$theme, this.$colorMode]);

  constructor(
    private readonly config: QuillarConfig,
    private readonly colorModeUtils: ColorModeUtils,
    private readonly themeConfig: QuillarThemeConfig,
  ) {
    this.initialize();
  }

  public getTheme(): WithCSSVar<QuillarTheme> {
    return this.$theme.value;
  }

  private getInitialColorMode(): ColorMode {
    const initialColorMode = this.$theme.value.config.initialColorMode;

    return initialColorMode === "system" || !initialColorMode ? "light" : initialColorMode;
  }

  public getStyleConfig(themeKey: string | null, props: ThemingProps & Dict = {}): QuillarStyleObject {
    return this.getStyleConfigImp(themeKey, props);
  }

  public getMultiStyleConfig(themeKey: string | null, props: ThemingProps & Dict = {}): Record<string, QuillarStyleObject> {
    return this.getStyleConfigImp(themeKey, props);
  }

  public getColorMode(): ColorMode {
    return this.$colorMode.value;
  }

  public toggleColorMode() {
    this.setColorMode(this.getColorMode() === "dark" ? "light" : "dark");
  }

  public setColorMode(colorMode: NonNullable<ColorModeWithSystem>) {
    const resolved = colorMode === "system" ? this.colorModeUtils.getSystemTheme() : colorMode;
    this.$colorMode.next(resolved);

    this.colorModeUtils.setClassName(resolved === "dark");
    this.colorModeUtils.setDataSet(resolved, Boolean(this.$theme.value.config.disableTransitionOnChange));

    this.config.colorModeManager.set(resolved);
  }

  public destroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private getStyleConfigImp(themeKey: string | null, props: ThemingProps & Dict = {}): any {
    const { styleConfig: styleConfigProp, ...rest } = props;

    const theme = this.getTheme();
    const colorMode = this.getColorMode();

    const themeStyleConfig = themeKey ? get(theme, `components.${themeKey}`) : undefined;

    const styleConfig = styleConfigProp || themeStyleConfig;

    const mergedProps = mergeWith({ theme, colorMode }, styleConfig?.defaultProps ?? {}, filterUndefined(omit(rest)));

    if (styleConfig) {
      const getStyles = resolveStyleConfig(styleConfig);
      return getStyles(mergedProps);
    }
    return {};
  }

  private initialize() {
    if (this.$theme.value.config.initialColorMode === "system") {
      this.$resolvedColorMode.next(this.colorModeUtils.getSystemTheme());
    }

    const managerValue = this.config.colorModeManager.get();

    if (managerValue) {
      this.setColorMode(managerValue);
      return;
    }

    if (this.$theme.value.config.initialColorMode === "system") {
      this.setColorMode("system");
      return;
    }

    this.setColorMode(this.$theme.value.config.initialColorMode as ColorMode);

    if (this.$theme.value.config.useSystemColorMode) {
      const listener = this.setColorMode.bind(this);
      this.subscriptions.push(this.colorModeUtils.addListener(listener));
    }
  }
}
