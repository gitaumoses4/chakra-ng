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
