export interface Doc {
  header: string;
  description: string;
}

export interface DocPage extends Doc {
  title: string;
  sections: DocSection[];
}

export interface DocSection extends Doc {
  id: string;
  component: any;
  children?: DocSection[];
}
