import { ChakraConfig } from "./chakra.config";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { ThemeService } from "./theme.service";
import { ColorModeUtils } from "./color-mode.utils";
import { StylesService } from "../styles";
import { Interpolation } from "@emotion/serialize";
import { get, runIfFn } from "@chakra-ui/utils";
import { css } from "@chakra-ui/styled-system";
import { cssReset, vhPolyfill } from "../styles/css-reset/styles";
import { ChakraNgThemeConfig } from "../../utils";

@NgModule()
export class ThemeModule {}
