export interface Demo {
  component?: Promise<any>;
  code: Code[];
}

export interface Doc {
  id: string;
  path: string;
  title: string;
  depth: number;
  content: string;
  demo?: Demo;
  sections: Doc[];
}

export type Code = {
  language: string;
  fileName: string;
  content: string;
};

export type Docs = Record<string, Doc>;
