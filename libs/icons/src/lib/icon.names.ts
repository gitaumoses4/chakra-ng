import * as icons from "./icons";

type Icons = {
  [K in keyof typeof icons as Uppercase<K>]: K;
};

export const ChakraIcons: Icons = Object.keys(icons).reduce(
  (acc, iconName) => ({
    ...acc,
    [iconName.toUpperCase()]: iconName,
  }),
  {},
) as any;

export type ChakraIcon = keyof typeof icons;
