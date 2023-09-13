export interface Doc {
  id: string;
  title: string;
  description?: string;
  content: string;
  demo?: Promise<any>;
  code: Code[];
  sections: Doc[];
}

export type Code = {
  language: string;
  fileName: string;
  content: string;
};

export type Docs = Record<string, Doc>;
