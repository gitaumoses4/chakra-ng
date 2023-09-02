import { InjectionToken } from "@angular/core";
import { WithCSSVar } from "@chakra-ui/styled-system";
import { ChakraTheme } from "@chakra-ui/theme";

export const THEME = new InjectionToken<WithCSSVar<ChakraTheme>>("QUILLAR_THEME");
