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
