import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { QStylesDirective } from "@quillar/angular";

@Component({
  standalone: true,
  imports: [RouterModule, QStylesDirective],
  template: `
    <div [qStyles]="{ maxWidth: '6xl', m: 'auto', p: '4' }">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class DocsPage {}
