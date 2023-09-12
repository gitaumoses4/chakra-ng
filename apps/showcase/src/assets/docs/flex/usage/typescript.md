```typescript
import { Component } from "@angular/core";
import { CenterLayout, FlexLayout, QStylesDirective, Square } from "@quillar/angular";

@Component({
  standalone: true,
  imports: [FlexLayout, QStylesDirective, CenterLayout, Square],
  selector: "flex-usage-demo",
  templateUrl: "./flex-usage.demo.html",
})
export class FlexUsageDemo {}
```