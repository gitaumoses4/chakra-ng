import { ThemeExtensions } from "./types";
import { withDefaultColorScheme, withDefaultSize, withDefaultVariant } from "@chakra-ui/theme-utils";

export const extensions: ThemeExtensions = {
  colorScheme: withDefaultColorScheme,
  variant: withDefaultVariant,
  size: withDefaultSize,
};
