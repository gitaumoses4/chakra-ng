import { NavMenu } from "./types";

export const navMenu: NavMenu = [
  {
    title: "Getting Started",
    icon: "compass",
    routerLink: "/getting-started",
    subMenu: [],
  },
  {
    title: "Components",
    icon: "palette",
    routerLink: "/docs/components",
    subMenu: [
      {
        title: "Layout",
        items: [
          {
            title: "Aspect Ratio",
            routerLink: "/docs/components/aspect-ratio",
          },
          {
            title: "Center",
            routerLink: "/docs/components/center",
          },
          {
            title: "Container",
            routerLink: "/docs/components/container",
          },
          {
            title: "Flex",
            routerLink: "/docs/components/flex",
          },
          {
            title: "Grid",
            routerLink: "/docs/components/grid",
          },
          {
            title: "Stack",
            routerLink: "/docs/components/stack",
          },
        ],
      },
      {
        title: "Form",
        items: [
          {
            title: "Button",
            routerLink: "/docs/components/button",
          },
        ],
      },
    ],
  },
];
