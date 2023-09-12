export const demos = {
  "button/import": [
    {
      "fileName": "button-import.md",
      "template": "```javascript\nimport { ButtonComponent } from \"@quillar/angular\";\n```\n"
    }
  ],
  "button/usage": [
    {
      "language": "html",
      "fileName": "button-usage-demo.html",
      "template": "<q-button colorScheme=\"blue\">Button</q-button>\n"
    },
    {
      "language": "javascript",
      "fileName": "button-usage.demo.ts",
      "template": "import { ButtonComponent } from \"@quillar/angular\";\nimport { Component } from \"@angular/core\";\n\n@Component({\n  standalone: true,\n  imports: [ButtonComponent],\n  selector: \"button-usage-demo\",\n  templateUrl: \"./button-usage-demo.html\",\n})\nexport class ButtonUsageDemo {}\n"
    }
  ],
  "flex/import": [
    {
      "fileName": "flex-import.md",
      "template": "```javascript\nimport { FlexLayout } from \"@quillar/angular\";\n```\n"
    }
  ],
  "flex/usage": [
    {
      "language": "html",
      "fileName": "flex-usage.demo.html",
      "template": "<div qFlex [qStyles]=\"{ color: 'white' }\">\n  <div qCenter [qStyles]=\"{ w: '100px', bg: 'green.500' }\">\n    <span>Box 1</span>\n  </div>\n  <div qSquare [size]=\"'150px'\" [qStyles]=\"{ bg: 'blue.500' }\">\n    <span>Box 2</span>\n  </div>\n  <div [qStyles]=\"{ flex: 1, bg: 'tomato' }\">\n    <span>Box 3</span>\n  </div>\n</div>\n"
    },
    {
      "language": "javascript",
      "fileName": "flex-usage.demo.ts",
      "template": "import { Component } from \"@angular/core\";\nimport { CenterLayout, FlexLayout, QStylesDirective, Square } from \"@quillar/angular\";\n\n@Component({\n  standalone: true,\n  imports: [FlexLayout, QStylesDirective, CenterLayout, Square],\n  selector: \"flex-usage-demo\",\n  templateUrl: \"./flex-usage.demo.html\",\n})\nexport class FlexUsageDemo {}\n"
    },
    {
      "fileName": "flex-usage.md",
      "template": "Using the Flex components, here are some helpful shorthand inputs\n\n- `flexDirection` is `direction`\n- `flexWrap` is `wrap`\n- `flexBasis` is `basis`\n- `flexGrow` is `grow`\n- `flexShrink` is `shrink`\n- `alignItems` is `align`\n- `justifyContent` is `justify`\n"
    }
  ]
}