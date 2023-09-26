import { ChakraIcon } from "@chakra-ng/icons";

export type NavMenuItem = {
  title: string;
  icon?: ChakraIcon;
  routerLink?: string;
  children?: NavMenuItem[];
};

export type NavMenu = NavMenuItem[];
