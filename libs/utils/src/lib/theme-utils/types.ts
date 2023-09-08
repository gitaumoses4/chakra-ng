import { ThemingProps } from "@chakra-ui/styled-system";
import { DeepPartial, ThemeExtension } from "@chakra-ui/theme-utils";
import { ChakraTheme } from "@chakra-ui/theme";

export interface ThemeExtensionConfig {
  type: keyof ThemingProps;
  value: ThemingProps[this["type"]];
  components?: string[] | Record<string, any>;
}

export type ThemeExtensionProps<K extends keyof ThemingProps> = Required<Pick<ThemingProps, K>> & {
  components?: string[] | Record<string, any>;
};

export type ThemeExtensions = {
  [K in keyof ThemingProps]: (props: ThemeExtensionProps<K>) => ThemeExtension;
};

export type QuillarTheme = ChakraTheme;

export type PartialQuillarTheme = DeepPartial<QuillarTheme>;
