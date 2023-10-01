import { Docs } from '../types';
export const docs: Docs = {
  "components": {
    "aspect-ratio": {
      "id": "aspect-ratio",
      "path": "aspect-ratio",
      "title": "Aspect Ratio",
      "depth": 1,
      "content": "Aspect Ratio is a utility directive that allows you to maintain the aspect ratio of an element. <br/><br/>\n",
      "sections": [
        {
          "id": "import",
          "path": "aspect-ratio/import",
          "title": "Import",
          "depth": 2,
          "content": "```typescript\nimport { LayoutModule } from \"@chakra-ng/angular\";\n```\n",
          "sections": []
        },
        {
          "id": "embedding-content",
          "path": "aspect-ratio/embedding-content",
          "title": "Embedding Content",
          "depth": 2,
          "content": "",
          "sections": [
            {
              "id": "embed-video",
              "path": "aspect-ratio/embedding-content/embed-video",
              "title": "Embed Video",
              "depth": 3,
              "demo": {
                "component": import("./components/aspect-ratio/embed-video/embed-video.demo"),
                "code": [
                  {
                    "fileName": "embed-video.demo.html",
                    "language": "html",
                    "content": "<div [aspectRatio]=\"1\" [maxW]=\"'560px'\">\n  <iframe title=\"naruto\" src=\"https://www.youtube.com/embed/QhBnZ6NPOY0\" allowfullscreen> </iframe>\n</div>\n"
                  },
                  {
                    "fileName": "embed-video.demo.ts",
                    "language": "typescript",
                    "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"embed-video-demo\",\n  templateUrl: \"./embed-video.demo.html\",\n  imports: [LayoutModule],\n})\nexport class EmbedVideoDemo {}\n"
                  }
                ]
              },
              "content": "To embed a video with a specific aspect ratio, use an iframe with src pointing to the link of the video.\n\nPass `maxWidth` to `[chakraStyles]` to control the width of the video\n",
              "sections": []
            },
            {
              "id": "embed-image",
              "path": "aspect-ratio/embedding-content/embed-image",
              "title": "Embed Image",
              "depth": 3,
              "demo": {
                "component": import("./components/aspect-ratio/embed-image/embed-image.demo"),
                "code": [
                  {
                    "fileName": "embed-image.demo.html",
                    "language": "html",
                    "content": "<div [aspectRatio]=\"4/3\" [maxW]=\"'400px'\">\n  <img src=\"https://bit.ly/naruto-sage\" alt=\"naruto\" />\n</div>\n"
                  },
                  {
                    "fileName": "embed-image.demo.ts",
                    "language": "typescript",
                    "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"embed-image-demo\",\n  templateUrl: \"./embed-image.demo.html\",\n  imports: [LayoutModule],\n})\nexport class EmbedImageDemo {}\n"
                  }
                ]
              },
              "content": "Here's how to embed an image that has a 4 by 3 aspect ratio\n",
              "sections": []
            },
            {
              "id": "embed-map",
              "path": "aspect-ratio/embedding-content/embed-map",
              "title": "Embed Map",
              "depth": 3,
              "demo": {
                "component": import("./components/aspect-ratio/embed-map/embed-map.demo"),
                "code": [
                  {
                    "fileName": "embed-map.demo.html",
                    "language": "html",
                    "content": "<div [aspectRatio]=\"16 / 9\">\n  <iframe [src]=\"mapUrl\"></iframe>\n</div>\n"
                  },
                  {
                    "fileName": "embed-map.demo.ts",
                    "language": "typescript",
                    "content": "import { ChangeDetectionStrategy, Component } from \"@angular/core\";\nimport { LayoutModule } from \"@chakra-ng/angular\";\nimport { DomSanitizer } from \"@angular/platform-browser\";\n\n@Component({\n  standalone: true,\n  selector: \"embed-map-demo\",\n  templateUrl: \"./embed-map.demo.html\",\n  imports: [LayoutModule],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class EmbedMapDemo {\n  constructor(protected sanitizer: DomSanitizer) {}\n\n  get mapUrl() {\n    return this.sanitizer.bypassSecurityTrustResourceUrl(\n      \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.37\" +\n        \"5295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3\" +\n        \"!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v156\" +\n        \"7723392506!5m2!1sen!2sng\",\n    );\n  }\n}\n"
                  }
                ]
              },
              "content": "Here's how to embed a responsive Google map using `[aspectRatio]`. To make the map take up the entire width, we can ignore the `maxWidth` property.\n",
              "sections": []
            }
          ]
        }
      ]
    },
    "button": {
      "id": "button",
      "path": "button",
      "title": "Button",
      "depth": 1,
      "content": "The button component is a wrapper around the native element.\n",
      "sections": [
        {
          "id": "import",
          "path": "button/import",
          "title": "Import",
          "depth": 2,
          "content": "```javascript\nimport { ButtonComponent } from \"@chakra-ng/angular\";\n```\n",
          "sections": []
        },
        {
          "id": "usage",
          "path": "button/usage",
          "title": "Usage",
          "depth": 2,
          "demo": {
            "component": import("./components/button/usage/button-usage.demo"),
            "code": [
              {
                "fileName": "button-usage.demo.html",
                "language": "html",
                "content": "<chakra-button colorScheme=\"blue\">Button</chakra-button>\n"
              },
              {
                "fileName": "button-usage.demo.ts",
                "language": "typescript",
                "content": "import { ButtonModule } from \"@chakra-ng/angular\";\nimport { Component } from \"@angular/core\";\n\n@Component({\n  standalone: true,\n  imports: [ButtonModule],\n  selector: \"button-usage-demo\",\n  templateUrl: \"./button-usage.demo.html\",\n})\nexport class ButtonUsageDemo {}\n"
              }
            ]
          },
          "content": "",
          "sections": [
            {
              "id": "button-sizes",
              "path": "button/usage/button-sizes",
              "title": "Button Sizes",
              "depth": 3,
              "demo": {
                "component": import("./components/button/button-sizes/button-sizes.demo"),
                "code": [
                  {
                    "fileName": "button-sizes.demo.html",
                    "language": "html",
                    "content": "<div hStack [spacing]=\"4\" [align]=\"'center'\">\n  <chakra-button [colorScheme]=\"'teal'\" [size]=\"'xs'\">Button</chakra-button>\n  <chakra-button [colorScheme]=\"'teal'\" [size]=\"'sm'\">Button</chakra-button>\n  <chakra-button [colorScheme]=\"'teal'\" [size]=\"'md'\">Button</chakra-button>\n  <chakra-button [colorScheme]=\"'teal'\" [size]=\"'lg'\">Button</chakra-button>\n</div>\n"
                  },
                  {
                    "fileName": "button-sizes.demo.ts",
                    "language": "typescript",
                    "content": "import { Component } from \"@angular/core\";\nimport { ButtonModule, LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"button-sizes-demo\",\n  templateUrl: \"./button-sizes.demo.html\",\n  imports: [LayoutModule, ButtonModule],\n})\nexport class ButtonSizesDemo {}\n"
                  }
                ]
              },
              "content": "Use the `size` property to change the size of the button. The default size is `md`. You can set the value to `xs`, `sm`, `md` or `lg`.\n",
              "sections": []
            },
            {
              "id": "button-variants",
              "path": "button/usage/button-variants",
              "title": "Button Variants",
              "depth": 3,
              "demo": {
                "component": import("./components/button/button-variants/button-variants.demo"),
                "code": [
                  {
                    "fileName": "button-variants.demo.html",
                    "language": "html",
                    "content": "<div hStack [spacing]=\"4\" [align]=\"'center'\">\n  <chakra-button [colorScheme]=\"'teal'\" [variant]=\"'solid'\">Button</chakra-button>\n  <chakra-button [colorScheme]=\"'teal'\" [variant]=\"'outline'\">Button</chakra-button>\n  <chakra-button [colorScheme]=\"'teal'\" [variant]=\"'ghost'\">Button</chakra-button>\n  <chakra-button [colorScheme]=\"'teal'\" [variant]=\"'link'\">Button</chakra-button>\n</div>\n"
                  },
                  {
                    "fileName": "button-variants.demo.ts",
                    "language": "typescript",
                    "content": "import { Component } from \"@angular/core\";\nimport { ButtonModule, LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"button-variants-demo\",\n  templateUrl: \"./button-variants.demo.html\",\n  imports: [LayoutModule, ButtonModule],\n})\nexport class ButtonVariantsDemo {}\n"
                  }
                ]
              },
              "content": "Use the `variant` property to change the visual type of the button. You can set the value to `solid`, `outline`, `ghost` or `link`.\n",
              "sections": []
            },
            {
              "id": "button-colors",
              "path": "button/usage/button-colors",
              "title": "Button Colors",
              "depth": 3,
              "content": "Use the `colorScheme` property to change the color of the button. You can set the value to any color in the theme object.\n",
              "sections": []
            }
          ]
        }
      ]
    },
    "center": {
      "id": "center",
      "path": "center",
      "title": "Center",
      "depth": 1,
      "content": "Center is a directive that centers an element's content within itself.\n",
      "sections": [
        {
          "id": "import",
          "path": "center/import",
          "title": "Import",
          "depth": 2,
          "content": "```typescript\nimport { LayoutModule } from \"@chakra-ng/angular\";\n```\n",
          "sections": []
        },
        {
          "id": "usage",
          "path": "center/usage",
          "title": "Usage",
          "depth": 2,
          "demo": {
            "component": import("./components/center/usage/usage.demo"),
            "code": [
              {
                "fileName": "usage.demo.html",
                "language": "html",
                "content": "<div center [bg]=\"'tomato'\" [h]=\"'100px'\" [color]=\"'white'\">This is the Center.</div>\n"
              },
              {
                "fileName": "usage.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"usage-demo\",\n  templateUrl: \"./usage.demo.html\",\n  imports: [LayoutModule],\n})\nexport class UsageDemo {}\n"
              }
            ]
          },
          "content": "Put any child element inside a `div` with the `center` directive to center it.\n",
          "sections": [
            {
              "id": "with-icons",
              "path": "center/usage/with-icons",
              "title": "With Icons",
              "depth": 3,
              "demo": {
                "component": import("./components/center/with-icons/with-icons.demo"),
                "code": [
                  {
                    "fileName": "with-icons.demo.html",
                    "language": "html",
                    "content": "<div hStack>\n  <div center [w]=\"'40px'\" [h]=\"'40px'\" [bg]=\"'tomato'\" [color]=\"'white'\">\n    <chakra-icon name=\"phone\"></chakra-icon>\n  </div>\n  <div center [w]=\"'40px'\" [h]=\"'40px'\" [bg]=\"'tomato'\" [color]=\"'white'\">\n    <span chakra [fontWeight]=\"'bold'\" [fontSize]=\"'lg'\">1</span>\n  </div>\n</div>\n"
                  },
                  {
                    "fileName": "with-icons.demo.ts",
                    "language": "typescript",
                    "content": "import { Component } from \"@angular/core\";\nimport { ChakraSystemModule, IconModule, LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"with-icons-demo\",\n  templateUrl: \"./with-icons.demo.html\",\n  imports: [LayoutModule, IconModule, ChakraSystemModule],\n})\nexport class WithIconsDemo {}\n"
                  }
                ]
              },
              "content": "Center can be used to create frames around icons or numbers.\n",
              "sections": []
            },
            {
              "id": "square-and-circle",
              "path": "center/usage/square-and-circle",
              "title": "Square and Circle",
              "depth": 3,
              "demo": {
                "component": import("./components/center/square-and-circle/square-and-circle.demo"),
                "code": [
                  {
                    "fileName": "square-and-circle.demo.html",
                    "language": "html",
                    "content": "<div hStack>\n  <div circle [size]=\"'40px'\" [bg]=\"'tomato'\" [color]=\"'white'\">\n    <chakra-icon name=\"phone\"></chakra-icon>\n  </div>\n  <div square [size]=\"'40px'\" [bg]=\"'purple.700'\" [color]=\"'white'\">\n    <chakra-icon name=\"phone\"></chakra-icon>\n  </div>\n</div>\n"
                  },
                  {
                    "fileName": "square-and-circle.demo.ts",
                    "language": "typescript",
                    "content": "import { Component } from \"@angular/core\";\nimport { IconModule, LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"square-and-circle-demo\",\n  templateUrl: \"./square-and-circle.demo.html\",\n  imports: [LayoutModule, IconModule],\n})\nexport class SquareAndCircleDemo {}\n"
                  }
                ]
              },
              "content": "To reducer boilerplate, we've created the `[square]` and `[circle]` directives that automatically center the content.\n",
              "sections": []
            },
            {
              "id": "absolute-center",
              "path": "center/usage/absolute-center",
              "title": "Absolute Center",
              "depth": 3,
              "demo": {
                "component": import("./components/center/absolute-center/absolute-center.demo"),
                "code": [
                  {
                    "fileName": "absolute-center.demo.html",
                    "language": "html",
                    "content": "<div chakra [position]=\"'relative'\" [h]=\"'100px'\">\n  <div absoluteCenter [axis]=\"'both'\" [bg]=\"'tomato'\" [p]=\"4\" [color]=\"'white'\">\n    <chakra-icon name=\"phone\"></chakra-icon>\n  </div>\n</div>\n"
                  },
                  {
                    "fileName": "absolute-center.demo.ts",
                    "language": "typescript",
                    "content": "import { Component } from \"@angular/core\";\nimport { ChakraSystemModule, IconModule, LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"absolute-center-demo\",\n  templateUrl: \"./absolute-center.demo.html\",\n  imports: [LayoutModule, IconModule, ChakraSystemModule],\n})\nexport class AbsoluteCenterDemo {}\n"
                  }
                ]
              },
              "content": "Used to horizontally and vertically center an element relative to its parent dimensions. Uses the `position: absolute` CSS property.\nTakes `axis` property which could be \"both\" (default), \"horizontal\" or \"vertical\".\n",
              "sections": []
            }
          ]
        }
      ]
    },
    "container": {
      "id": "container",
      "path": "container",
      "title": "Container",
      "depth": 1,
      "content": "Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid.\n",
      "sections": [
        {
          "id": "import",
          "path": "container/import",
          "title": "Import",
          "depth": 2,
          "content": "```typescript\nimport {LayoutModule} from \"@chakra-ng/angular\";\n```\n",
          "sections": []
        },
        {
          "id": "usage",
          "path": "container/usage",
          "title": "Usage",
          "depth": 2,
          "demo": {
            "component": import("./components/container/usage/usage.demo"),
            "code": [
              {
                "fileName": "usage.demo.html",
                "language": "html",
                "content": "<div container>\n  There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to\n  engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production\n</div>\n"
              },
              {
                "fileName": "usage.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"usage-demo\",\n  templateUrl: \"./usage.demo.html\",\n  imports: [LayoutModule],\n})\nexport class UsageDemoComponent {}\n"
              }
            ]
          },
          "content": "To contain any piece of content, simply wrap it with an element with `container` directive.\n",
          "sections": []
        },
        {
          "id": "container-size",
          "path": "container/container-size",
          "title": "Container Size",
          "depth": 2,
          "demo": {
            "component": import("./components/container/container-size/container-size.demo"),
            "code": [
              {
                "fileName": "container-size.demo.html",
                "language": "html",
                "content": "<div vStack>\n  <div container [maxW]=\"'md'\" [bg]=\"'blue.600'\" [color]=\"'white'\">\"md\" Container</div>\n  <div container [maxW]=\"'500px'\" [bg]=\"'purple.600'\" [color]=\"'white'\">\"550px\" Container</div>\n  <div container [maxW]=\"'container.sm'\" [bg]=\"'green.400'\" [color]=\"'white'\">\"container.sm\" Container</div>\n</div>\n"
              },
              {
                "fileName": "container-size.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"container-size-demo\",\n  templateUrl: \"./container-size.demo.html\",\n  imports: [LayoutModule],\n})\nexport class ContainerSizeDemo {}\n"
              }
            ]
          },
          "content": "By default, the `container` sets the `maxWidth` of the content to 60 characters (`60ch`).\nYou can customize this by passing custom maxWidth value or changing the size tokens defined in `theme.sizes.container`\n\n> * About the default value: The `ch` unit is a relative unit defined by the\n>   rendered typeface's \"0\" character width. This width varies by the shape and\n>   style of the font.\n> * If you are curious about the reason for this default value of `60`\n>   characters, consider this explanation about\n>   [line length](https://betterwebtype.com/articles/2019/06/16/5-keys-to-accessible-web-typography/#line-length)\n>   from Better Web Type.\n",
          "sections": []
        },
        {
          "id": "centering",
          "path": "container/centering",
          "title": "Centering the children",
          "depth": 2,
          "demo": {
            "component": import("./components/container/centering/centering.demo"),
            "code": [
              {
                "fileName": "centering.demo.html",
                "language": "html",
                "content": "<div container [maxW]=\"'2xl'\" [bg]=\"'blue.600'\" [centerContent]=\"true\">\n  <div chakra [padding]=\"4\" [bg]=\"'blue.400'\" [color]=\"'black'\" [maxW]=\"'md'\">\n    There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits\n    to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production.\n  </div>\n</div>\n"
              },
              {
                "fileName": "centering.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { ChakraSystemModule, LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"centering-demo\",\n  templateUrl: \"./centering.demo.html\",\n  imports: [LayoutModule, ChakraSystemModule],\n})\nexport class CenteringDemo {}\n"
              }
            ]
          },
          "content": "In some cases, the width of the content can be smaller than the container's\nwidth. You can use the `centerContent` prop to center the content. It renders a\nflexbox with `flexDirection` set to `column` and `alignItems` set to `center`.\n",
          "sections": []
        }
      ]
    },
    "flex": {
      "id": "flex",
      "path": "flex",
      "title": "Flex",
      "depth": 1,
      "content": "Flex is Box with display set to flex and comes with helpful style shorthand.\n",
      "sections": [
        {
          "id": "import",
          "path": "flex/import",
          "title": "Import",
          "depth": 2,
          "content": "```javascript\nimport { LayoutModule } from \"@chakra-ng/angular\";\n```\n",
          "sections": []
        },
        {
          "id": "usage",
          "path": "flex/usage",
          "title": "Usage",
          "depth": 2,
          "demo": {
            "component": import("./components/flex/usage/flex-usage.demo"),
            "code": [
              {
                "fileName": "flex-usage.demo.html",
                "language": "html",
                "content": "<div flexRow [color]=\"'white'\">\n  <div center [w]=\"'100px'\" [bg]=\"'green.500'\">\n    <span>Box 1</span>\n  </div>\n  <div square [size]=\"'150px'\" [bg]=\"'blue.500'\">\n    <span>Box 2</span>\n  </div>\n  <div flexRow [flex]=\"1\" [bg]=\"'tomato'\">\n    <span>Box 3</span>\n  </div>\n</div>\n"
              },
              {
                "fileName": "flex-usage.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { ChakraSystemModule, LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  imports: [LayoutModule, ChakraSystemModule],\n  selector: \"flex-usage-demo\",\n  templateUrl: \"./flex-usage.demo.html\",\n})\nexport class FlexUsageDemo {}\n"
              }
            ]
          },
          "content": "Using the Flex components, here are some helpful shorthand props you can pass to the parent flex container.\n\n* `flexDirection` is `direction`\n* `flexWrap` is `wrap`\n* `flexBasis` is `basis`\n* `flexGrow` is `grow`\n* `flexShrink` is `shrink`\n* `alignItems` is `align`\n* `justifyContent` is `justify`\n\nWhile you can pass the verbose props, using the shorthand can save you some time.\n",
          "sections": []
        },
        {
          "id": "using-the-spacer",
          "path": "flex/using-the-spacer",
          "title": "Using the Spacer",
          "depth": 2,
          "demo": {
            "component": import("./components/flex/using-the-spacer/flex-spacer.demo"),
            "code": [
              {
                "fileName": "flex-spacer.demo.html",
                "language": "html",
                "content": "<div flexRow>\n  <div chakra [p]=\"4\" [bg]=\"'red.400'\">Box 1</div>\n  <div spacer></div>\n  <div chakra [p]=\"4\" [bg]=\"'green.400'\">Box 2</div>\n</div>\n"
              },
              {
                "fileName": "flex-spacer.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { ChakraSystemModule, LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"flex-spacer-demo\",\n  templateUrl: \"./flex-spacer.demo.html\",\n  imports: [LayoutModule, ChakraSystemModule],\n})\nexport class FlexSpacerDemo {}\n"
              }
            ]
          },
          "content": "The `Spacer` component is a simple `div` with `flex-grow: 1` set. This means that it will take up all available space in the container.\n",
          "sections": []
        },
        {
          "id": "flex-grid-stack",
          "path": "flex/flex-grid-stack",
          "title": "Flex and Spacer vs Grid vs Stack",
          "depth": 2,
          "demo": {
            "component": import("./components/flex/flex-grid-stack/flex-grid-stack.demo"),
            "code": [
              {
                "fileName": "flex-grid-stack.demo.html",
                "language": "html",
                "content": "<div>\n  <p>Flex and Spacer: Full width, equal spacing</p>\n  <div flexRow>\n    <div chakra [w]=\"'70px'\" [h]=\"'10'\" [bg]=\"'red.500'\"></div>\n    <div spacer></div>\n    <div chakra [w]=\"'170px'\" [h]=\"10\" [bg]=\"'red.500'\"></div>\n    <div spacer></div>\n    <div chakra [w]=\"'180px'\" [h]=\"10\" [bg]=\"'red.500'\"></div>\n  </div>\n\n  <p>Grid: The children start at the beginning, the 1/3 mark and 2/3 mark</p>\n  <div grid [templateColumns]=\"'repeat(3, 1fr)'\" [gap]=\"6\">\n    <div chakra [w]=\"'70px'\" [h]=\"'10'\" [bg]=\"'blue.500'\"></div>\n    <div chakra [w]=\"'170px'\" [h]=\"10\" [bg]=\"'blue.500'\"></div>\n    <div chakra [w]=\"'180px'\" [h]=\"10\" [bg]=\"'blue.500'\"></div>\n  </div>\n\n  <p>HorizontalStack: The children have equal spacing but don't span the whole container</p>\n  <div hStack [spacing]=\"6\">\n    <div chakra [w]=\"'70px'\" [h]=\"'10'\" [bg]=\"'green.500'\"></div>\n    <div chakra [w]=\"'170px'\" [h]=\"10\" [bg]=\"'green.500'\"></div>\n    <div chakra [w]=\"'180px'\" [h]=\"10\" [bg]=\"'green.500'\"></div>\n  </div>\n</div>\n"
              },
              {
                "fileName": "flex-grid-stack.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { ChakraSystemModule, LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"flex-grid-stack-demo\",\n  templateUrl: \"./flex-grid-stack.demo.html\",\n  imports: [LayoutModule, ChakraSystemModule],\n})\nexport class FlexGridStackDemo {}\n"
              }
            ]
          },
          "content": "The `Flex` and `Spacer` components are a simple way to create a flexbox layout. If you need more control over the layout, you can use the `Grid` or\n`Stack` components.\n\n* In `Stack` The children will have equal spacing between them but won't span the entire width of the container.\n* In `Grid` The starting points of the children will be aligned but the children will not have equal spacing between them.\n* In `Flex` The children will have equal spacing between them and will span the entire width of the container.\n",
          "sections": [
            {
              "id": "spacer-usage",
              "path": "flex/flex-grid-stack/spacer-usage",
              "title": "Spacer Usage",
              "depth": 3,
              "demo": {
                "component": import("./components/flex/spacer-usage/spacer-usage.demo"),
                "code": [
                  {
                    "fileName": "spacer-usage.demo.html",
                    "language": "html",
                    "content": "<div flexRow [minWidth]=\"'max-content'\" [alignItems]=\"'center'\"  [gap]=\"2\">\n  <div chakra [padding]=\"2\">\n    <h2 heading [size]=\"'md'\">ChakraNg App</h2>\n  </div>\n  <div spacer></div>\n  <div flexRow [gap]=\"2\">\n    <chakra-button [colorScheme]=\"'teal'\">Sign Up</chakra-button>\n    <chakra-button [colorScheme]=\"'teal'\">Log In</chakra-button>\n  </div>\n</div>\n"
                  },
                  {
                    "fileName": "spacer-usage.demo.ts",
                    "language": "typescript",
                    "content": "import { Component } from \"@angular/core\";\nimport { ButtonModule, LayoutModule, ChakraSystemModule, TypographyModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"flex-spacer-usage\",\n  templateUrl: \"./spacer-usage.demo.html\",\n  imports: [LayoutModule, ChakraSystemModule, TypographyModule, ButtonModule],\n})\nexport class FlexSpacerUsageDemo {}\n"
                  }
                ]
              },
              "content": "A good use case for `Spacer` is to create a navbar with signup/login button aligned to the right.\n\nSince `Spacer` renders a `div`, any `gap` value provided to the parent is applied to both sides of this component, and therefore make the gap appear\ndoubled when the spacer is completely collapsed.\n\n> The example below is not responsive on purpose as you might switch to a collapsed menu on mobile.\n",
              "sections": []
            }
          ]
        }
      ]
    },
    "grid": {
      "id": "grid",
      "path": "grid",
      "title": "Grid",
      "depth": 1,
      "content": "Gird is a layout for managing items in a grid.\n",
      "sections": [
        {
          "id": "import",
          "path": "grid/import",
          "title": "Import",
          "depth": 2,
          "content": "```typescript\nimport {LayoutModule} from '@chakra-ng/angular';\n```\n",
          "sections": []
        },
        {
          "id": "template-columns",
          "path": "grid/template-columns",
          "title": "Template Columns",
          "depth": 2,
          "demo": {
            "component": import("./components/grid/template-columns/template-columns.demo"),
            "code": [
              {
                "fileName": "template-columns.demo.html",
                "language": "html",
                "content": "<div grid [templateColumns]=\"'repeat(5, 1fr)'\" [gap]=\"6\">\n  <div gridItem [width]=\"'100%'\" [h]=\"10\" [bg]=\"'blue.500'\"></div>\n  <div gridItem [width]=\"'100%'\" [h]=\"10\" [bg]=\"'blue.500'\"></div>\n  <div gridItem [width]=\"'100%'\" [h]=\"10\" [bg]=\"'blue.500'\"></div>\n  <div gridItem [width]=\"'100%'\" [h]=\"10\" [bg]=\"'blue.500'\"></div>\n  <div gridItem [width]=\"'100%'\" [h]=\"10\" [bg]=\"'blue.500'\"></div>\n</div>\n"
              },
              {
                "fileName": "template-columns.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"template-columns-demo\",\n  templateUrl: \"./template-columns.demo.html\",\n  imports: [LayoutModule],\n})\nexport class TemplateColumnsDemo {}\n"
              }
            ]
          },
          "content": "Here's an example of using grid template columns and applying a gap or space between the grid items.\n",
          "sections": []
        },
        {
          "id": "spanning-columns",
          "path": "grid/spanning-columns",
          "title": "Spanning Columns",
          "depth": 2,
          "demo": {
            "component": import("./components/grid/spanning-columns/spanning-columns.demo"),
            "code": [
              {
                "fileName": "spanning-columns.demo.html",
                "language": "html",
                "content": "<div grid [h]=\"'200px'\" [templateRows]=\"'repeat(2, 1fr)'\" [templateColumns]=\"'repeat(5, 1fr)'\" [gap]=\"4\">\n  <div gridItem [rowSpan]=\"2\" [colSpan]=\"1\" [bg]=\"'tomato'\"></div>\n  <div gridItem [colSpan]=\"2\" [bg]=\"'papayawhip'\"></div>\n  <div gridItem [colSpan]=\"2\" [bg]=\"'papayawhip'\"></div>\n  <div gridItem [colSpan]=\"4\" [bg]=\"'tomato'\"></div>\n</div>\n"
              },
              {
                "fileName": "spanning-columns.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"spanning-columns-demo\",\n  templateUrl: \"./spanning-columns.demo.html\",\n  imports: [LayoutModule],\n})\nexport class SpanningColumnsDemo {}\n"
              }
            ]
          },
          "content": "In some layouts, you may need certain grid items to span specific amount of columns or rows instead of an even\ndistribution.\nTo achieve this, you need to pas the `colSpan` property to the grid item and also the `rowSpan` property for row\nspanning.\nYou also need to specify the `templateColumns` and `templateRows` properties on the grid container.\n",
          "sections": []
        },
        {
          "id": "start-end-lines",
          "path": "grid/start-end-lines",
          "title": "Starting and ending lines",
          "depth": 2,
          "demo": {
            "component": import("./components/grid/start-end-lines/start-end-lines.demo"),
            "code": [
              {
                "fileName": "start-end-lines.demo.html",
                "language": "html",
                "content": "<div grid [templateColumns]=\"'repeat(5, 1fr)'\" [gap]=\"4\">\n  <div gridItem [colSpan]=\"2\" [bg]=\"'tomato'\" [h]=\"10\"></div>\n  <div gridItem [colStart]=\"4\" [colEnd]=\"6\" [bg]=\"'papayawhip'\" [h]=\"10\"></div>\n</div>\n"
              },
              {
                "fileName": "start-end-lines.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"start-end-lines-demo\",\n  templateUrl: \"./start-end-lines.demo.html\",\n  imports: [LayoutModule],\n})\nexport class StartEndLinesDemo {}\n"
              }
            ]
          },
          "content": "Pass the `colStart` and `colEnd` prop to the grid item to specify where the item should start and end.\n",
          "sections": []
        },
        {
          "id": "template-areas",
          "path": "grid/template-areas",
          "title": "Template Areas",
          "depth": 2,
          "demo": {
            "component": import("./components/grid/template-areas/template-areas.demo"),
            "code": [
              {
                "fileName": "template-areas.demo.html",
                "language": "html",
                "content": "<div\n  grid\n  [templateAreas]=\"areas\"\n  [templateRows]=\"'50px 1fr 30px'\"\n  [templateColumns]=\"'150px 1fr'\"\n  [h]=\"'200px'\"\n  [color]=\"'blackAlpha.700'\"\n  [fontWeight]=\"'bold'\"\n  [gap]=\"1\"\n>\n  <div gridItem [area]=\"'header'\" [bg]=\"'orange.300'\" [pl]=\"2\">Header</div>\n  <div gridItem [area]=\"'nav'\" [bg]=\"'pink.300'\" [pl]=\"2\">Nav</div>\n  <div gridItem [area]=\"'main'\" [bg]=\"'green.300'\" [pl]=\"2\">Main</div>\n  <div gridItem [area]=\"'footer'\" [bg]=\"'blue.300'\" [pl]=\"2\">Footer</div>\n</div>\n"
              },
              {
                "fileName": "template-areas.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"template-areas-demo\",\n  templateUrl: \"./template-areas.demo.html\",\n  imports: [LayoutModule],\n})\nexport class TemplateAreasDemo {\n  areas = `\"header header\"\n                     \"nav main\"\n                     \"nav footer\"`;\n}\n"
              }
            ]
          },
          "content": "The `templateAreas` prop specifies areas within the grid layout. Use template literals to name the area. Now you can\nreference the area by passing `area` prop in the grid item.\n",
          "sections": []
        }
      ]
    },
    "stack": {
      "id": "stack",
      "path": "stack",
      "title": "Stack",
      "depth": 1,
      "content": "Stack is a container that lays out its children vertically or horizontally and applies a space between them.\n",
      "sections": [
        {
          "id": "import",
          "path": "stack/import",
          "title": "Import",
          "depth": 2,
          "content": "```js\nimport { LayoutModule } from \"@chakra-ng/angular\";\n```\n",
          "sections": []
        },
        {
          "id": "usage",
          "path": "stack/usage",
          "title": "Usage",
          "depth": 2,
          "demo": {
            "component": import("./components/stack/usage/stack-usage.demo"),
            "code": [
              {
                "fileName": "stack-usage.demo.html",
                "language": "html",
                "content": "<div stack [spacing]=\"'24px'\">\n  <div square [bg]=\"'yellow.200'\" [color]=\"'black'\" [size]=\"'40px'\">1</div>\n  <div square [bg]=\"'tomato'\" [size]=\"'40px'\">2</div>\n  <div square [bg]=\"'pink.100'\" [color]=\"'black'\" [size]=\"'40px'\">3</div>\n</div>\n"
              },
              {
                "fileName": "stack-usage.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { ChakraSystemModule, LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"stack-usage-demo\",\n  templateUrl: \"./stack-usage.demo.html\",\n  imports: [LayoutModule, ChakraSystemModule],\n})\nexport class StackUsageDemo {}\n"
              }
            ]
          },
          "content": "Stack uses a modified version of the [CSS lobotomized own selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) to add spacing\nbetween its children.\n\nTo stack elements in horizontal or vertical direction only, use the `chakraHStack` or `chakraVStack` directives respectively. You can also use the\n`chakraStack` directive and pass the direction as an input.\n",
          "sections": []
        },
        {
          "id": "responsive-direction",
          "path": "stack/responsive-direction",
          "title": "Responsive Direction",
          "depth": 2,
          "demo": {
            "component": import("./components/stack/responsive-direction/stack-responsive.demo"),
            "code": [
              {
                "fileName": "stack-responsive.demo.html",
                "language": "html",
                "content": "<div stack [direction]=\"['column', 'row']\" [spacing]=\"'24px'\">\n  <div square [color]=\"'black'\" [bg]=\"'yellow.200'\" [size]=\"'40px'\">1</div>\n  <div square [bg]=\"'tomato'\" [size]=\"'40px'\">2</div>\n  <div square [bg]=\"'pink.100'\" [color]=\"'black'\" [size]=\"'40px'\">3</div>\n</div>\n"
              },
              {
                "fileName": "stack-responsive.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { ChakraSystemModule, LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"stack-responsive-demo\",\n  templateUrl: \"./stack-responsive.demo.html\",\n  imports: [ChakraSystemModule, LayoutModule],\n})\nexport class StackResponsiveDemo {}\n"
              }
            ]
          },
          "content": "You can pass responsive values to the `chakraStack` directive to change the direction of the stack at different breakpoints.\n",
          "sections": []
        },
        {
          "id": "stack-dividers",
          "path": "stack/stack-dividers",
          "title": "Stack Dividers",
          "depth": 2,
          "demo": {
            "component": import("./components/stack/stack-dividers/stack-dividers.demo"),
            "code": [
              {
                "fileName": "stack-dividers.demo.html",
                "language": "html",
                "content": "<div vStack [spacing]=\"'2'\" [align]=\"'stretch'\" [divider]=\"divider\">\n  <div chakra [h]=\"'40px'\" [bg]=\"'yellow.200'\" [color]=\"'black'\">1</div>\n  <div chakra [h]=\"'40px'\" [bg]=\"'tomato'\">2</div>\n  <div chakra [h]=\"'40px'\" [bg]=\"'pink.100'\" [color]=\"'black'\">3</div>\n</div>\n\n<ng-template #divider>\n  <chakra-stack-divider [borderColor]=\"'gray.200'\"></chakra-stack-divider>\n</ng-template>\n"
              },
              {
                "fileName": "stack-dividers.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { ChakraSystemModule, LayoutModule } from \"@chakra-ng/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"stack-dividers-demo\",\n  templateUrl: \"./stack-dividers.demo.html\",\n  imports: [ChakraSystemModule, LayoutModule],\n})\nexport class StackDividersDemo {}\n"
              }
            ]
          },
          "content": "In some scenarios, you may want to add dividers between the children of a stack. Pass the divider template to the `chakraStack` directive to add\ndividers.\n",
          "sections": []
        },
        {
          "id": "stack-items-horizontally",
          "path": "stack/stack-items-horizontally",
          "title": "Stack items horizontally",
          "depth": 2,
          "content": "Use the `chakraHStack` directive or pass `direction` to the `chakraStack` directive to stack items horizontally. Optionally, you can pass the `align`\nand `justify` inputs to align and justify the items.\n",
          "sections": []
        },
        {
          "id": "stack-demo",
          "path": "stack/stack-demo",
          "title": "Feature cards with Stack Layout",
          "depth": 2,
          "demo": {
            "component": import("./components/stack/stack-demo/stack-component.demo"),
            "code": [
              {
                "fileName": "stack-component.demo.html",
                "language": "html",
                "content": "<div stack [spacing]=\"8\" [direction]=\"'row'\">\n  <ng-container *ngFor=\"let feature of features\">\n    <div chakra [p]=\"5\" [shadow]=\"'md'\" [borderWidth]=\"'1px'\">\n      <h1 heading [size]=\"'md'\">{{ feature.title }}</h1>\n      <p chakra [mt]=\"4\">{{ feature.description }}</p>\n    </div>\n  </ng-container>\n</div>\n"
              },
              {
                "fileName": "stack-component.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { ChakraSystemModule, LayoutModule, TypographyModule } from \"@chakra-ng/angular\";\nimport { CommonModule } from \"@angular/common\";\n\n@Component({\n  standalone: true,\n  selector: \"stack-component-demo\",\n  templateUrl: \"./stack-component.demo.html\",\n  imports: [LayoutModule, ChakraSystemModule, TypographyModule, CommonModule],\n})\nexport class StackComponentDemo {\n  features = [\n    { title: \"Plan Money\", description: \"The future can be even brighter but a goal without a plan is just a wish.\" },\n    {\n      title: \"Save Money\",\n      description:\n        \"You deserve good thing. With a whooping 10-15% interest\" +\n        \"rate per ann-um, grow your savings on your own terms with our completely automated process\",\n    },\n  ];\n}\n"
              }
            ]
          },
          "content": "",
          "sections": []
        },
        {
          "id": "hstack-demo",
          "path": "stack/hstack-demo",
          "title": "Feature cards with HStack Layout",
          "depth": 2,
          "demo": {
            "component": import("./components/stack/hstack-demo/h-stack-component.demo"),
            "code": [
              {
                "fileName": "h-stack-component.demo.html",
                "language": "html",
                "content": "<div hStack [spacing]=\"8\">\n  <ng-container *ngFor=\"let feature of features\">\n    <div chakra [p]=\"5\" [shadow]=\"'md'\" [borderWidth]=\"'1px'\">\n      <h1 heading [size]=\"'md'\">{{ feature.title }}</h1>\n      <p chakra [mt]=\"4\">{{ feature.description }}</p>\n    </div>\n  </ng-container>\n</div>\n"
              },
              {
                "fileName": "h-stack-component.demo.ts",
                "language": "typescript",
                "content": "import { Component } from \"@angular/core\";\nimport { ChakraSystemModule, LayoutModule, TypographyModule } from \"@chakra-ng/angular\";\nimport { CommonModule } from \"@angular/common\";\n\n@Component({\n  standalone: true,\n  selector: \"stack-component-demo\",\n  templateUrl: \"./h-stack-component.demo.html\",\n  imports: [LayoutModule, ChakraSystemModule, TypographyModule, CommonModule],\n})\nexport class HStackComponentDemo {\n  features = [\n    { title: \"Plan Money\", description: \"The future can be even brighter but a goal without a plan is just a wish.\" },\n    {\n      title: \"Save Money\",\n      description:\n        \"You deserve good thing. With a whooping 10-15% interest\" +\n        \"rate per ann-um, grow your savings on your own terms with our completely automated process\",\n    },\n  ];\n}\n"
              }
            ]
          },
          "content": "",
          "sections": []
        }
      ]
    }
  }
}