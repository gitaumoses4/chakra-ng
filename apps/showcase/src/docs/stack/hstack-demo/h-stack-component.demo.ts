import { Component } from "@angular/core";
import { LayoutModule, ChakraNgModule, TypographyModule } from "@chakra-ng/angular";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "stack-component-demo",
  templateUrl: "./h-stack-component.demo.html",
  imports: [LayoutModule, ChakraNgModule, TypographyModule, CommonModule],
})
export class HStackComponentDemo {
  features = [
    { title: "Plan Money", description: "The future can be even brighter but a goal without a plan is just a wish." },
    {
      title: "Save Money",
      description:
        "You deserve good thing. With a whooping 10-15% interest" +
        "rate per ann-um, grow your savings on your own terms with our completely automated process",
    },
  ];
}
