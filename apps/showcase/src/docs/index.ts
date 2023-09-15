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
        "depth": 3,
        "content": "```javascript\nimport { ButtonComponent } from \"@quillar/angular\";\n```\n",
        "sections": []
      },
      {
        "id": "usage",
        "path": "button/usage",
        "title": "Usage",
        "depth": 3,
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
              "content": "import { ButtonComponent } from \"@quillar/angular\";\nimport { Component } from \"@angular/core\";\n\n@Component({\n    standalone: true,\n    imports: [ButtonComponent],\n    selector: \"button-usage-demo\",\n    templateUrl: \"./button-usage.demo.html\",\n})\nexport class ButtonUsageDemo {}\n"
            }
          ]
        },
        "content": "",
        "sections": [
          {
            "id": "button-sizes",
            "path": "button/usage/button-sizes",
            "title": "Button Sizes",
            "depth": 4,
            "content": "Use the `size` prop to change the size of the button. You can set the value to `xs`, `sm`, `md` or `lg`.\n",
            "sections": []
          }
        ]
      },
      {
        "id": "button-props",
        "path": "button/button-props",
        "title": "Button Props",
        "depth": 2,
        "content": "It's important to note that the `button` component is a wrapper around the native `button` element. This means that any props that are not explicitly\n",
        "sections": [
          {
            "id": "accessibility",
            "path": "button/button-props/accessibility",
            "title": "Accessibility",
            "depth": 3,
            "content": "A button has a role of `button` and is keyboard focusable by default. If you need to disable the button, use the `disabled` prop or set the `disabled`\nattribute to `true` or `disabled`.\n",
            "sections": [
              {
                "id": "button-variants",
                "path": "button/button-props/accessibility/button-variants",
                "title": "Button Variants",
                "depth": 4,
                "content": "Use the `variant` prop to change the variant of the button. You can set the value to `primary`, `secondary`, `success`, `warning`, `danger`, `info`,\n",
                "sections": []
              }
            ]
          },
          {
            "id": "theming",
            "path": "button/button-props/theming",
            "title": "Theming",
            "depth": 3,
            "content": "The button component uses the `button` theme by default. You can change the theme using the `theme` prop or the `theme` attribute.\n",
            "sections": []
          }
        ]
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
              "content": "<div qFlex [qStyles]=\"{ color: 'white' }\">\n    <div qCenter [qStyles]=\"{ w: '100px', bg: 'green.500' }\">\n        <span>Box 1</span>\n    </div>\n    <div qSquare [size]=\"'150px'\" [qStyles]=\"{ bg: 'blue.500' }\">\n        <span>Box 2</span>\n    </div>\n    <div [qStyles]=\"{ flex: 1, bg: 'tomato' }\">\n        <span>Box 3</span>\n    </div>\n</div>\n"
            },
            {
              "fileName": "flex-usage.demo.ts",
              "language": "typescript",
              "content": "import { Component } from \"@angular/core\";\nimport { CenterLayout, FlexLayout, QStylesDirective, Square } from \"@quillar/angular\";\n\n@Component({\n    standalone: true,\n    imports: [FlexLayout, QStylesDirective, CenterLayout, Square],\n    selector: \"flex-usage-demo\",\n    templateUrl: \"./flex-usage.demo.html\",\n})\nexport class FlexUsageDemo {}\n"
            }
          ]
        },
        "content": "Using the Flex components, here are some helpful shorthand props:\n\n* `flexDirection` is `direction`\n* `flexWrap` is `wrap`\n* `flexBasis` is `basis`\n* `flexGrow` is `grow`\n* `flexShrink` is `shrink`\n* `alignItems` is `align`\n* `justifyContent` is `justify`\n\nWhile you can pass the verbose props, using the shorthand can save you some time.\n",
        "sections": []
      }
    ]
  }
}