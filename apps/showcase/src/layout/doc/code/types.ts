export type Language = "html" | "javascript" | "command" | "scss";

export type Code = { language: Language; template: string };

export interface ExtFile {
  path: string;
  content: string;
}

export interface RouteFile extends ExtFile {
  name: string;
}
