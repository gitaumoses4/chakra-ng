import * as solidIcons from "./solid";
import * as outlineIcons from "./outline";

type Icons = {
  [K in keyof typeof solidIcons]: K;
} & {
  [K in keyof typeof outlineIcons]: K;
};

export const ChakraIcons: Icons = Object.keys({ ...solidIcons, ...outlineIcons }).reduce(
  (acc, iconName) => ({
    ...acc,
    [iconName]: iconName,
  }),
  {},
) as any;

export type ChakraIcon = keyof typeof solidIcons | keyof typeof outlineIcons;
