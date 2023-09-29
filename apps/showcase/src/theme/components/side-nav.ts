import { createMultiStyleConfigHelpers, cssVar, defineStyle } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers([
  "menu",
  "menuItem",
  "menuItemIcon",
  "menuItemTitle",
  "subMenu",
  "subMenuTitle",
  "subMenuContent",
  "subMenuItem",
  "subMenuItemLink",
]);

const $iconColor = cssVar("item-icon-color", "colors.accent");
const $iconBg = cssVar("item-icon-bg", "transparent");

const menu = defineStyle({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

const menuItem = defineStyle({
  display: "flex",
  alignItems: "center",
  gap: 2,
  p: 2,
  fontSize: "sm",
  fontWeight: "bold",
  color: "fg-muted",
  cursor: "pointer",
  [$iconColor.variable]: "colors.accent",
  _activeLink: {
    color: "accent",
    [$iconColor.variable]: "white",
    [$iconBg.variable]: "colors.accent",
  },
  "&:hover:not([aria-current='page'])": {
    color: "fg",
  },
});

const menuItemIcon = defineStyle({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "chakra-border-color",
  w: 6,
  h: 6,
  borderRadius: "md",
  color: $iconColor.reference,
  bg: $iconBg.reference,
});

const subMenu = defineStyle({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

const subMenuTitle = defineStyle({
  fontSize: "xs",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "accent",
  p: 2,
});

const subMenuContent = defineStyle({
  display: "flex",
  flexDirection: "column",
  gap: 1,
});

const subMenuItem = defineStyle({
  fontSize: "sm",
  fontWeight: "bold",
  _dark: {
    color: "fg-subtle",
  },
  px: 2,
  py: 1,
  _activeLink: {
    borderRadius: "md",
    borderWidth: "1px",
    borderColor: "chakra-border-color",
    background: "accent-subtle",
    _dark: {
      color: "accent-muted",
      background: "rgba(48, 140, 122, 0.3)",
    },
  },
});

export const SideNav = defineMultiStyleConfig({
  baseStyle: {
    menu,
    menuItem,
    menuItemIcon,
    subMenu,
    subMenuTitle,
    subMenuContent,
    subMenuItem,
  },
});
