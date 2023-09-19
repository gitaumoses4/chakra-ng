import { QuillarIcons } from "@quillar/icons";

export type NavMenuItem = {
  title: string;
  icon?: QuillarIcons;
  routerLink?: string;
  children?: NavMenuItem[];
};

export type NavMenu = NavMenuItem[];
