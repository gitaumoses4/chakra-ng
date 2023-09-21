import * as icons from "./icons";

export const ChakraNgIcon: Record<Uppercase<keyof typeof icons>, string> = Object.keys(icons).reduce(
  (acc, iconName) => ({
    ...acc,
    [iconName.toUpperCase()]: iconName,
  }),
  {},
) as any;
