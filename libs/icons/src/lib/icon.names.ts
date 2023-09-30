import * as solidIcons from "./solid";

type Icons = {
  [K in keyof typeof solidIcons]: K;
};

export const ChakraIcons: Icons = Object.keys({ ...solidIcons }).reduce(
  (acc, iconName) => ({
    ...acc,
    [iconName]: iconName,
  }),
  {},
) as any;

export type ChakraIcon = keyof typeof solidIcons;
