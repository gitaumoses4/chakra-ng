import { Type } from "@angular/core";

export interface Doc {
  id: string;
  header: string;
  description?: string;
}

export interface DocPage extends Doc {
  sections: DocSection[];
}

export interface DocSection extends Doc {
  component?: Type<any>;
  docs?: string;
  demo?: Type<any>;
  children?: DocSection[];
}
