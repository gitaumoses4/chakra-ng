import { Inject, Injectable } from "@angular/core";
import { Dict, filterUndefined, get, mergeWith } from "@chakra-ui/utils";
import { resolveStyleConfig, ThemingProps, WithCSSVar } from "@chakra-ui/styled-system";
import { omit } from "@chakra-ui/object-utils";
import { BehaviorSubject, Subscription } from "rxjs";
import { ColorMode, ColorModeWithSystem } from "./types";
import { ColorModeUtils } from "./color-mode.utils";
import { QuillarConfig } from "../config";
import { generateTheme, QuillarTheme, QuillarThemeConfig } from "@quillar/utils";
import { QuillarStyleObject } from "../system";
import { ThemeDirection } from "@chakra-ui/theme";
import { DOCUMENT } from "@angular/common";

@Injectable({ providedIn: "root" })
export class ThemeService {
  private $theme = new BehaviorSubject<WithCSSVar<QuillarTheme>>(generateTheme(this.themeConfig));
  private $direction = new BehaviorSubject(this.themeConfig.theme?.direction);
  private $colorMode = new BehaviorSubject<ColorModeWithSystem>(this.getInitialColorMode());
  private $resolvedColorMode = new BehaviorSubject<ColorMode | undefined>(undefined);
  private subscriptions: Subscription[] = [];

  constructor(
    private readonly config: QuillarConfig,
    private readonly colorModeUtils: ColorModeUtils,
    private readonly themeConfig: QuillarThemeConfig,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.initialize();

    this.subscriptions.push(
      this.$direction.subscribe((direction) => {
        if (direction) {
          this.document.documentElement.dir = direction;
        }
      }),
    );
  }

  public getTheme(): WithCSSVar<QuillarTheme> {
    return this.$theme.value;
  }

  public getInitialColorMode() {
    return this.getTheme().config.initialColorMode;
  }

  public getStyleConfig(themeKey: string | null, props: ThemingProps & Dict = {}): QuillarStyleObject {
    return this.getStyleConfigImp(themeKey, props);
  }

  public getMultiStyleConfig(themeKey: string | null, props: ThemingProps & Dict = {}): Record<string, QuillarStyleObject> {
    return this.getStyleConfigImp(themeKey, props);
  }

  public getColorMode(): ColorMode {
    return (this.getInitialColorMode() === "system" && !this.$colorMode.value ? this.$resolvedColorMode.value : this.$colorMode.value) as ColorMode;
  }

  public toggleColorMode() {
    this.setColorMode(this.getColorMode() === "dark" ? "light" : "dark");
  }

  public setDirection(direction: ThemeDirection) {
    this.$direction.next(direction);
  }

  public toggleDirection() {
    this.$direction.next(this.$direction.value === "ltr" ? "rtl" : "ltr");
  }

  public setColorMode(colorMode: NonNullable<ColorModeWithSystem>) {
    const resolved = colorMode === "system" ? this.colorModeUtils.getSystemTheme() : colorMode;
    this.$colorMode.next(resolved);

    this.colorModeUtils.setClassName(resolved === "dark");
    this.colorModeUtils.setDataSet(resolved, Boolean(this.getTheme().config.disableTransitionOnChange));

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
    if (this.getInitialColorMode() === "system") {
      this.$resolvedColorMode.next(this.colorModeUtils.getSystemTheme());
    }

    const managerValue = this.config.colorModeManager.get();

    if (managerValue) {
      this.setColorMode(managerValue);
      return;
    }

    if (this.getInitialColorMode() === "system") {
      this.setColorMode("system");
      return;
    }

    this.setColorMode(this.getInitialColorMode() as ColorMode);

    if (this.getTheme().config.useSystemColorMode) {
      const listener = this.setColorMode.bind(this);
      this.subscriptions.push(this.colorModeUtils.addListener(listener));
    }
  }
}
