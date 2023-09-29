import { ChakraIcon } from "@chakra-ng/icons";

export type SubMenuItem = {
  title: string;
  routerLink: string;
};

export type SubMenu = {
  title: string;
  items: SubMenuItem[];
};

export type MenuItem = {
  title: string;
  icon: string;
  routerLink: string;
  subMenu: SubMenu[];
};

export type NavMenu = MenuItem[];
