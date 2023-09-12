export type Language = "html" | "javascript" | "command" | "scss";

export type Code = { language: Language; template: string; fileName?: string };
