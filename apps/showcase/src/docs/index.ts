export const docs = {
  "button/usage": [
    {
      language: "html",
      fileName: "button-usage-demo.html",
      template: '<q-button colorScheme="blue">Button</q-button>\n',
    },
    {
      language: "javascript",
      fileName: "button-usage.demo.ts",
      template:
        'import { ButtonComponent } from "@quillar/angular";\nimport { Component } from "@angular/core";\n\n@Component({\n  standalone: true,\n  imports: [ButtonComponent],\n  selector: "button-usage-demo",\n  templateUrl: "./button-usage-demo.html",\n})\nexport class ButtonUsageDemo {}\n',
    },
  ],
};
