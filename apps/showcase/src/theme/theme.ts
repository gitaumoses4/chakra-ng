import { PartialChakraTheme } from "@chakra-ng/angular";
import { components } from "./components";

const theme: PartialChakraTheme = {
  config: {
    initialColorMode: "dark",
  },
  semanticTokens: {
    colors: {
      accent: { default: "teal.500", _dark: "teal.300" },
      "accent-emphasis": { default: "teal.700", _dark: "teal.200" },
      "accent-static": "teal.500",
      "accent-muted": { default: "teal.300", _dark: "teal.200" },
      "accent-subtle": { default: "teal.50", _dark: "teal.800" },
      fg: { default: "gray.700", _dark: "gray.100" },
      "fg-emphasis": { default: "gray.900", _dark: "gray.200" },
      "fg-muted": { default: "gray.600", _dark: "gray.400" },
      "fg-subtle": { default: "gray.500", _dark: "gray.300" },
      "fg-on-accent": { default: "white", _dark: "inherit" },
    },
    space: {
      "nav-bar": "20",
    },
    sizes: {
      "nav-bar": "20",
      "page-content": "calc(100vh - 4rem)",
    },
  },
  fonts: {
    heading: "'Eudoxus Sans', system-ui, sans-serif",
    body: "'Eudoxus Sans', system-ui, sans-serif",
  },
  components,
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
      markdown: {
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
          position: "relative",
          overflow: "hidden",
          bg: "orange.100",
          _dark: {
            bg: "rgba(251, 211, 141, 0.16)",
          },
          rounded: "lg",
          px: "1.25rem",
          py: "1rem",
          my: "1.5rem",
          "& p": {
            margin: 0,
          },
          "&:before": {
            content: `""`,
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "5px",
            bg: "orange.500",
            _dark: {
              bg: "orange.200",
            },
          },
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
          "&:not(pre code)": {
            color: "purple.500",
            _dark: {
              color: "purple.200",
            },
          },
        },
        table: {
          width: "full",
          my: "2rem",
          borderCollapse: "separate",
          borderSpacing: 0,
          "th,td": {
            textAlign: "left",
            py: "0.5rem",
            pr: "1rem",
            pl: 0,
            borderColor: "inherit",
            borderBottomWidth: "1px",
          },
          th: {
            verticalAlign: "bottom",
            borderBottomWidth: "2px",
            color: "fg-muted",
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
