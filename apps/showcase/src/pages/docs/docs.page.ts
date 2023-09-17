import { Component } from "@angular/core";

@Component({
  template: `
    <div [qStyles]="{ maxWidth: '6xl', m: 'auto', p: '4' }">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class DocsPage {}
