import { Docs } from '../types';
export const docs: Docs = {
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
        "content": "```javascript\nimport { ButtonComponent } from \"@quillar/angular\";\n```\n",
        "sections": []
      },
      {
        "id": "usage",
        "path": "button/usage",
        "title": "Usage",
        "depth": 2,
        "demo": {
          "component": import("./button/usage/button-usage.demo"),
          "code": [
            {
              "fileName": "button-usage.demo.html",
              "language": "html",
              "content": "<q-button colorScheme=\"blue\">Button</q-button>\n"
            },
            {
              "fileName": "button-usage.demo.ts",
              "language": "typescript",
              "content": "import { ButtonModule } from \"@quillar/angular\";\nimport { Component } from \"@angular/core\";\n\n@Component({\n  standalone: true,\n  imports: [ButtonModule],\n  selector: \"button-usage-demo\",\n  templateUrl: \"./button-usage.demo.html\",\n})\nexport class ButtonUsageDemo {}\n"
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
            "content": "Use the `size` prop to change the size of the button. You can set the value to `xs`, `sm`, `md` or `lg`.\n",
            "sections": [
              {
                "id": "button-props",
                "path": "button/usage/button-sizes/button-props",
                "title": "Button Props",
                "depth": 4,
                "content": "It's important to note that the `button` component is a wrapper around the native `button` element. This means that any props that are not explicitly\n",
                "sections": []
              }
            ]
          }
        ]
      },
      {
        "id": "accessibility",
        "path": "button/accessibility",
        "title": "Accessibility",
        "depth": 2,
        "content": "A button has a role of `button` and is keyboard focusable by default. If you need to disable the button, use the `disabled` prop or set the `disabled`\nattribute to `true` or `disabled`.\n",
        "sections": [
          {
            "id": "button-variants",
            "path": "button/accessibility/button-variants",
            "title": "Button Variants",
            "depth": 3,
            "content": "Use the `variant` prop to change the variant of the button. You can set the value to `primary`, `secondary`, `success`, `warning`, `danger`, `info`,\n",
            "sections": []
          }
        ]
      },
      {
        "id": "theming",
        "path": "button/theming",
        "title": "Theming",
        "depth": 2,
        "content": "The button component uses the `button` theme by default. You can change the theme using the `theme` prop or the `theme` attribute.\n",
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
        "content": "```javascript\nimport { FlexLayout } from \"@quillar/angular\";\n```\n",
        "sections": []
      },
      {
        "id": "usage",
        "path": "flex/usage",
        "title": "Usage",
        "depth": 2,
        "demo": {
          "component": import("./flex/usage/flex-usage.demo"),
          "code": [
            {
              "fileName": "flex-usage.demo.html",
              "language": "html",
              "content": "<div qFlex [qStyles]=\"{ color: 'white' }\">\n  <div qCenter [qStyles]=\"{ w: '100px', bg: 'green.500' }\">\n    <span>Box 1</span>\n  </div>\n  <div qSquare [size]=\"'150px'\" [qStyles]=\"{ bg: 'blue.500' }\">\n    <span>Box 2</span>\n  </div>\n  <div [qStyles]=\"{ flex: 1, bg: 'tomato' }\">\n    <span>Box 3</span>\n  </div>\n</div>\n"
            },
            {
              "fileName": "flex-usage.demo.ts",
              "language": "typescript",
              "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule, QuillarModule } from \"@quillar/angular\";\n\n@Component({\n  standalone: true,\n  imports: [LayoutModule, QuillarModule],\n  selector: \"flex-usage-demo\",\n  templateUrl: \"./flex-usage.demo.html\",\n})\nexport class FlexUsageDemo {}\n"
            }
          ]
        },
        "content": "Using the Flex components, here are some helpful shorthand props:\n\n* `flexDirection` is `direction`\n* `flexWrap` is `wrap`\n* `flexBasis` is `basis`\n* `flexGrow` is `grow`\n* `flexShrink` is `shrink`\n* `alignItems` is `align`\n* `justifyContent` is `justify`\n\nWhile you can pass the verbose props, using the shorthand can save you some time.\n",
        "sections": []
      },
      {
        "id": "using-the-spacer",
        "path": "flex/using-the-spacer",
        "title": "Using the Spacer",
        "depth": 2,
        "demo": {
          "component": import("./flex/using-the-spacer/flex-spacer.demo"),
          "code": [
            {
              "fileName": "flex-spacer.demo.html",
              "language": "html",
              "content": "<div qFlex>\n  <div [qStyles]=\"{ p: '4', bg: 'red.400'}\">Box 1</div>\n  <div qSpace></div>\n  <div [qStyles]=\"{ p: '4', bg: 'green.400'}\">Box 2</div>\n</div>\n"
            },
            {
              "fileName": "flex-spacer.demo.ts",
              "language": "typescript",
              "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule, QuillarModule } from \"@quillar/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"flex-spacer-demo\",\n  templateUrl: \"./flex-spacer.demo.html\",\n  imports: [LayoutModule, QuillarModule],\n})\nexport class FlexSpacerDemo {}\n"
            }
          ]
        },
        "content": "The `Spacer` component is a simple `div` with `flex-grow: 1` set. This means that it will take up all available space in the container.\n",
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
        "content": "```js\nimport { LayoutModule } from \"@quillar/angular\";\n```\n",
        "sections": []
      },
      {
        "id": "usage",
        "path": "stack/usage",
        "title": "Usage",
        "depth": 2,
        "demo": {
          "component": import("./stack/usage/stack-usage.demo"),
          "code": [
            {
              "fileName": "stack-usage.demo.html",
              "language": "html",
              "content": "<div qHorizontalStack [spacing]=\"'24px'\">\n  <div qSquare [qStyles]=\"{ bg: 'yellow.200', color: 'black'}\" [size]=\"'40px'\">1</div>\n  <div qSquare [qStyles]=\"{ bg: 'tomato'}\" [size]=\"'40px'\">2</div>\n  <div qSquare [qStyles]=\"{ bg: 'pink.100', color: 'black'}\" [size]=\"'40px'\">3</div>\n</div>\n"
            },
            {
              "fileName": "stack-usage.demo.ts",
              "language": "typescript",
              "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule } from \"@quillar/components\";\nimport { QuillarModule } from \"@quillar/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"stack-usage-demo\",\n  templateUrl: \"./stack-usage.demo.html\",\n  imports: [LayoutModule, QuillarModule],\n})\nexport class StackUsageDemo {}\n"
            }
          ]
        },
        "content": "Stack uses a modified version of the [CSS lobotomized own selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) to add spacing\nbetween its children.\n\nTo stack elements in horizontal or vertical direction only, use the `qHorizontalStack` or `qVerticalStack` directives respectively. You can also use\nthe `qStack` directive and pass the direction as an input.\n",
        "sections": []
      },
      {
        "id": "responsive-direction",
        "path": "stack/responsive-direction",
        "title": "Responsive Direction",
        "depth": 2,
        "demo": {
          "component": import("./stack/responsive-direction/stack-responsive.demo"),
          "code": [
            {
              "fileName": "stack-responsive.demo.html",
              "language": "html",
              "content": "<div qStack [direction]=\"['column', 'row']\" [spacing]=\"'24px'\">\n  <div qSquare [qStyles]=\"{ bg: 'yellow.200', color: 'black'}\" [size]=\"'40px'\">1</div>\n  <div qSquare [qStyles]=\"{ bg: 'tomato'}\" [size]=\"'40px'\">2</div>\n  <div qSquare [qStyles]=\"{ bg: 'pink.100', color: 'black'}\" [size]=\"'40px'\">3</div>\n</div>\n"
            },
            {
              "fileName": "stack-responsive.demo.ts",
              "language": "typescript",
              "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule, QuillarModule } from \"@quillar/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"stack-responsive-demo\",\n  templateUrl: \"./stack-responsive.demo.html\",\n  imports: [QuillarModule, LayoutModule],\n})\nexport class StackResponsiveDemo {}\n"
            }
          ]
        },
        "content": "You can pass responsive values to the `qStack` directive to change the direction of the stack at different breakpoints.\n",
        "sections": []
      },
      {
        "id": "stack-dividers",
        "path": "stack/stack-dividers",
        "title": "Stack Dividers",
        "depth": 2,
        "demo": {
          "component": import("./stack/stack-dividers/stack-dividers.demo"),
          "code": [
            {
              "fileName": "stack-dividers.demo.html",
              "language": "html",
              "content": "<div qVerticalStack [spacing]=\"'2'\" [align]=\"'stretch'\" [divider]=\"divider\">\n  <div [qStyles]=\"{ h: '40px', bg: 'yellow.200', color: 'black' }\">1</div>\n  <div [qStyles]=\"{ h: '40px', bg: 'tomato' }\">2</div>\n  <div [qStyles]=\"{ h: '40px', bg: 'pink.100', color: 'black' }\">3</div>\n</div>\n\n<ng-template #divider>\n  <q-stack-divider [qStyles]=\"{ borderColor: 'gray.200' }\"></q-stack-divider>\n</ng-template>\n"
            },
            {
              "fileName": "stack-dividers.demo.ts",
              "language": "typescript",
              "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule, QuillarModule } from \"@quillar/angular\";\n\n@Component({\n  standalone: true,\n  selector: \"stack-dividers-demo\",\n  templateUrl: \"./stack-dividers.demo.html\",\n  imports: [QuillarModule, LayoutModule],\n})\nexport class StackDividersDemo {}\n"
            }
          ]
        },
        "content": "In some scenarios, you may want to add dividers between the children of a stack. Pass the divider template to the `qStack` directive to add dividers.\n",
        "sections": []
      },
      {
        "id": "stack-items-horizontally",
        "path": "stack/stack-items-horizontally",
        "title": "Stack items horizontally",
        "depth": 2,
        "content": "Use the `qHorizontalStack` directive or pass `direction` to the `qStack` directive to stack items horizontally. Optionally, you can pass the `align`\nand `justify` inputs to align and justify the items.\n",
        "sections": []
      },
      {
        "id": "feature-cards-with-stack-layout",
        "path": "stack/feature-cards-with-stack-layout",
        "title": "Feature cards with Stack Layout",
        "depth": 2,
        "demo": {
          "component": import("./stack/feature-cards-with-stack-layout/stack-component.demo"),
          "code": [
            {
              "fileName": "stack-component.demo.html",
              "language": "html",
              "content": "<div qStack [spacing]=\"8\" [direction]=\"'row'\">\n  <ng-container *ngFor=\"let feature of features\">\n    <div [qStyles]=\"{ p: 5, shadow: 'md', borderWidth: '1px'}\">\n      <h1 qHeading [size]=\"'md'\">{{ feature.title }}</h1>\n      <p [qStyles]=\"{ mt: 4}\">{{ feature.description }}</p>\n    </div>\n  </ng-container>\n</div>\n"
            },
            {
              "fileName": "stack-component.demo.ts",
              "language": "typescript",
              "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule, QuillarModule, TypographyModule } from \"@quillar/angular\";\nimport { CommonModule } from \"@angular/common\";\n\n@Component({\n  standalone: true,\n  selector: \"stack-component-demo\",\n  templateUrl: \"./stack-component.demo.html\",\n  imports: [LayoutModule, QuillarModule, TypographyModule, CommonModule],\n})\nexport class StackComponentDemo {\n  features = [\n    { title: \"Plan Money\", description: \"The future can be even brighter but a goal without a plan is just a wish.\" },\n    {\n      title: \"Save Money\",\n      description:\n        \"You deserve good thing. With a whooping 10-15% interest\" +\n        \"rate per ann-um, grow your savings on your own terms with our completely automated process\",\n    },\n  ];\n}\n"
            }
          ]
        },
        "content": "",
        "sections": []
      },
      {
        "id": "feature-cards-with-hstack-layout",
        "path": "stack/feature-cards-with-hstack-layout",
        "title": "Feature cards with Hstack Layout",
        "depth": 2,
        "demo": {
          "component": import("./stack/feature-cards-with-hstack-layout/h-stack-component.demo"),
          "code": [
            {
              "fileName": "h-stack-component.demo.html",
              "language": "html",
              "content": "<div qHorizontalStack [spacing]=\"8\">\n  <ng-container *ngFor=\"let feature of features\">\n    <div [qStyles]=\"{ p: 5, shadow: 'md', borderWidth: '1px'}\">\n      <h1 qHeading [size]=\"'md'\">{{ feature.title }}</h1>\n      <p [qStyles]=\"{ mt: 4}\">{{ feature.description }}</p>\n    </div>\n  </ng-container>\n</div>\n"
            },
            {
              "fileName": "h-stack-component.demo.ts",
              "language": "typescript",
              "content": "import { Component } from \"@angular/core\";\nimport { LayoutModule, QuillarModule, TypographyModule } from \"@quillar/angular\";\nimport { CommonModule } from \"@angular/common\";\n\n@Component({\n  standalone: true,\n  selector: \"stack-component-demo\",\n  templateUrl: \"./h-stack-component.demo.html\",\n  imports: [LayoutModule, QuillarModule, TypographyModule, CommonModule],\n})\nexport class HStackComponentDemo {\n  features = [\n    { title: \"Plan Money\", description: \"The future can be even brighter but a goal without a plan is just a wish.\" },\n    {\n      title: \"Save Money\",\n      description:\n        \"You deserve good thing. With a whooping 10-15% interest\" +\n        \"rate per ann-um, grow your savings on your own terms with our completely automated process\",\n    },\n  ];\n}\n"
            }
          ]
        },
        "content": "",
        "sections": []
      }
    ]
  }
}