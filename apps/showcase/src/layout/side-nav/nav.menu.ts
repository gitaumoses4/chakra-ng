import { NavMenu } from "./types";
import { ChakraNgIcon } from "@chakra-ng/icons";

export const navMenu: NavMenu = [
  {
    title: "Components",
    icon: ChakraNgIcon.BOX,
    children: [
      {
        title: "Layout",
        children: [
          {
            title: "Aspect Ratio",
            routerLink: "/docs/aspect-ratio",
          },
          {
            title: "Center",
            routerLink: "/docs/center",
          },
          {
            title: "Flex",
            routerLink: "/docs/flex",
          },
          {
            title: "Stack",
            routerLink: "/docs/stack",
          },
        ],
      },
      {
        title: "Form",
        children: [
          {
            title: "Button",
            routerLink: "/docs/button",
          },
        ],
      },
    ],
  },
];
