export type Languages = "basic" | "html" | "typescript" | "command" | "scss" | "data";

export interface Code extends Partial<Record<Languages, string>> {
  module?: string;
  routerModule?: string;
  component?: string;
  service?: string[];
  imports?: string[];
  extFiles?: ExtFile[];
}

export interface ExtFile {
  path: string;
  content: string;
}

export interface RouteFile extends ExtFile {
  name: string;
}
