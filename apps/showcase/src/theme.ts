import { PartialQuillarTheme } from "@quillar/angular";

const theme: PartialQuillarTheme = {
  config: {
    initialColorMode: "dark",
  },
  semanticTokens: {
    colors: {
      accent: { default: "pink.500", _dark: "pink.300" },
      "accent-emphasis": { default: "pink.700", _dark: "pink.200" },
      "accent-static": "pink.500",
      "accent-muted": { default: "pink.300", _dark: "pink.200" },
      "accent-subtle": { default: "pink.50", _dark: "pink.800" },
      fg: { default: "gray.700", _dark: "gray.100" },
      "fg-emphasis": { default: "gray.900", _dark: "gray.200" },
      "fg-muted": { default: "gray.600", _dark: "gray.400" },
      "fg-subtle": { default: "gray.500", _dark: "gray.300" },
      "fg-on-accent": { default: "white", _dark: "inherit" },
    },
  },
  fonts: {
    heading: "'Eudoxus Sans', system-ui, sans-serif",
    body: "'Eudoxus Sans', system-ui, sans-serif",
  },
  styles: {
    global: {
      body: {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        fontSize: "16px",
        color: "fg",
        ".deleted": {
          color: "#ff8383 !important",
          fontStyle: "normal !important",
        },
        ".inserted": {
          color: "#b5f4a5 !important",
          fontStyle: "normal !important",
        },
      },
      ".markdown": {
        h1: {
          mt: "2rem",
          mb: ".25rem",
          lineHeight: 1.2,
          fontWeight: "bold",
          fontSize: "1.875rem",
          letterSpacing: "-.025em",
        },
        h2: {
          mt: "4rem",
          mb: "0.5rem",
          lineHeight: 1.3,
          fontWeight: "semibold",
          fontSize: "1.5rem",
          letterSpacing: "-.025em",
          "& + h3": {
            mt: "1.5rem",
          },
        },
        h3: {
          mt: "3rem",
          lineHeight: 1.25,
          fontWeight: "semibold",
          fontSize: "1.25rem",
          letterSpacing: "-.025em",
        },
        h4: {
          mt: "3rem",
          lineHeight: 1.375,
          fontWeight: "semibold",
          fontSize: "1.125rem",
        },
        a: {
          color: "accent",
          fontWeight: "semibold",
          transition: "color 0.15s",
          transitionTimingFunction: "ease-out",
          _hover: {
            color: "teal.600",
          },
        },
        p: {
          mt: "1.25rem",
          lineHeight: 1.7,
          "blockquote &": {
            mt: 0,
          },
        },
        hr: {
          my: "4rem",
        },
        blockquote: {
          bg: "orange.100",
          borderWidth: "1px",
          borderColor: "orange.200",
          rounded: "lg",
          px: "1.25rem",
          py: "1rem",
          my: "1.5rem",
        },
        ul: {
          mt: "0.5rem",
          ml: "1.25rem",
          "blockquote &": { mt: 0 },
          "& > * + *": {
            mt: "0.25rem",
          },
        },
        pre: {
          rounded: "lg",
          borderWidth: "1px",
          borderColor: "whiteAlpha.300",
          code: {
            all: "unset",
          },
        },
        code: {
          rounded: "md",
          px: "1",
          fontSize: "0.875em",
          py: "2px",
          lineHeight: "normal",
          color: "purple.500",
          _dark: {
            color: "purple.200",
          },
        },
      },
    },
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "bold",
      letterSpacing: "-0.015em",
      lineHeight: "1.24",
      fontSize: { base: "2rem", md: "3.5rem" },
    },
    "heading-2": {
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "bold",
      letterSpacing: "-0.015em",
      lineHeight: "1.24",
      fontSize: { base: "1.75rem", md: "2.75rem" },
    },
    caps: {
      textTransform: "uppercase",
      fontSize: "sm",
      letterSpacing: "widest",
      fontWeight: "bold",
    },
  },
};

export default theme;
