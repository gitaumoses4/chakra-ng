import { NavMenu } from "./types";
import { QuillarIcon } from "@quillar/icons";

export const navMenu: NavMenu = [
  {
    title: "Components",
    icon: QuillarIcon.BOX,
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
