import * as fs from "fs";
import { Demo } from "../../apps/showcase/src/types";
import * as path from "path";
import { DOCS_FOLDER } from "./constants";

function getCodeContent(file: string) {
  const content = fs.readFileSync(file, { encoding: "utf-8" });

  return content;

  // double the tabs to make it work with the markdown code block
  // return content.replace(/\n( +)/g, "\n$1$1");
}

function isAngularComponent(fileContent: string) {
  return fileContent.includes("@Component");
}

export function getDemo(section: string): Demo | undefined {
  const fullDir = path.join(DOCS_FOLDER, section);

  if (!fs.existsSync(fullDir)) {
    return undefined;
  }

  const files = fs.readdirSync(fullDir).filter((file) => {
    return fs.statSync(path.join(fullDir, file)).isFile();
  });

  const allowedFiles = {
    html: "html",
    ts: "typescript",
    scss: "scss",
  };

  const demo: Demo = {
    component: undefined,
    code: [],
  };

  demo.code = files
    .filter((file) => Object.keys(allowedFiles).includes(path.extname(file).replace(".", "")))
    .map((file) => {
      const content = getCodeContent(path.join(fullDir, file));

      if (isAngularComponent(content)) {
        demo.component = path.join(section, file.replace(path.extname(file), "")) as any;
      }
      return {
        fileName: file,
        language: allowedFiles[path.extname(file).replace(".", "")],
        content,
      };
    });

  if (!demo.code.length) {
    return undefined;
  }

  return demo;
}
