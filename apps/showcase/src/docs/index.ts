import { Docs } from '../types';
export const docs: Docs = {
  "button": {
    "id": "button",
    "title": "",
    "description": "",
    "content": "",
    "code": [],
    "sections": [
      {
        "id": "button/import",
        "title": "Import",
        "content": "\n```javascript\nimport { ButtonComponent } from \"@quillar/angular\";\n```\n",
        "code": [],
        "sections": []
      },
      {
        "id": "button/usage",
        "title": "",
        "description": "",
        "content": "",
        "code": [
          {
            "language": "typescript",
            "content": "import { ButtonComponent } from \"@quillar/angular\";\nimport { Component } from \"@angular/core\";\n\n@Component({\n    standalone: true,\n    imports: [ButtonComponent],\n    selector: \"button-usage-demo\",\n    templateUrl: \"./button-usage-demo.html\",\n})\nexport class ButtonUsageDemo {}\n",
            "fileName": "button-usage.demo.ts"
          }
        ],
        "demo": import("./button/usage/button-usage.demo"),
        "sections": []
      }
    ]
  },
  "flex": {
    "id": "flex",
    "title": "Flex",
    "description": "Flex is Box with display set to flex and comes with helpful style shorthand.",
    "content": "",
    "code": [],
    "sections": [
      {
        "id": "flex/import",
        "title": "Import",
        "content": "\n```javascript\nimport { FlexLayout } from \"@quillar/angular\";\n```\n",
        "code": [],
        "sections": []
      },
      {
        "id": "flex/spacer",
        "title": "Using the spacer",
        "content": "\nAs an alternative to `Stack`, you can combine `qFlex` and `qSpace` to create a layout with spacing between elements.\n",
        "code": [],
        "sections": []
      },
      {
        "id": "flex/usage",
        "title": "Usage",
        "content": "\nUsing the Flex components, here are some helpful shorthand props:\n\n- `flexDirection` is `direction`\n- `flexWrap` is `wrap`\n- `flexBasis` is `basis`\n- `flexGrow` is `grow`\n- `flexShrink` is `shrink`\n- `alignItems` is `align`\n- `justifyContent` is `justify`\n\nWhile you can pass the verbose props, using the shorthand can save you some\ntime.\n",
        "code": [
          {
            "language": "html",
            "content": "<div qFlex [qStyles]=\"{ color: 'white' }\">\n    <div qCenter [qStyles]=\"{ w: '100px', bg: 'green.500' }\">\n        <span>Box 1</span>\n    </div>\n    <div qSquare [size]=\"'150px'\" [qStyles]=\"{ bg: 'blue.500' }\">\n        <span>Box 2</span>\n    </div>\n    <div [qStyles]=\"{ flex: 1, bg: 'tomato' }\">\n        <span>Box 3</span>\n    </div>\n</div>\n",
            "fileName": "flex-usage.demo.html"
          },
          {
            "language": "typescript",
            "content": "import { Component } from \"@angular/core\";\nimport { CenterLayout, FlexLayout, QStylesDirective, Square } from \"@quillar/angular\";\n\n@Component({\n    standalone: true,\n    imports: [FlexLayout, QStylesDirective, CenterLayout, Square],\n    selector: \"flex-usage-demo\",\n    templateUrl: \"./flex-usage.demo.html\",\n})\nexport class FlexUsageDemo {}\n",
            "fileName": "flex-usage.demo.ts"
          }
        ],
        "demo": import("./flex/usage/flex-usage.demo"),
        "sections": []
      }
    ]
  }
}