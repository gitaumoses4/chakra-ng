import { ChakraNgIcons } from "@chakra-ng/icons";

export type NavMenuItem = {
  title: string;
  icon?: ChakraNgIcons;
  routerLink?: string;
  children?: NavMenuItem[];
};

export type NavMenu = NavMenuItem[];
