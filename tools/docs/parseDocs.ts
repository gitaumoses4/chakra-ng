import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";
import { getDemo } from "./getDemo";
import { DOCS_FOLDER } from "./constants";

async function imports() {
  const remarkParse = await import("remark-parse").then((mod) => mod.default);
  const unified = await import("unified").then((mod) => mod.unified);
  const sectionize = await import("remark-sectionize-headings").then((mod) => mod.default());
  const normalize = await import("remark-normalize-headings").then((mod) => mod.default() as any);
  const toMarkDown = await import("mdast-util-to-markdown").then((mod) => mod.toMarkdown);

  return {
    remarkParse,
    unified,
    sectionize,
    normalize,
    toMarkDown,
  };
}

async function generateSections(node: any, parentId = "") {
  if (node.type === "root") return generateSections(node.children[0]);

  const title = node.children?.[0]?.children?.[0]?.value;
  const id = _.kebabCase(title);

  const { toMarkDown } = await imports();

  const section = {
    id,
    path: parentId ? `${parentId}/${id}` : id,
    title,
    depth: node.children[0].depth,
    demo: undefined,
    content: "",
    sections: [],
  };

  const content = {
    type: "root",
    children: [],
  };

  section.demo = getDemo(section.path);

  if (node.children) {
    for (const child of node.children) {
      if (child.type === "section") {
        section.sections.push(await generateSections(child, section.path));
      } else {
        if (child.type !== "heading") {
          content.children.push(child);
        }
      }
    }

    section.content = toMarkDown(content as any);
  }

  return section;
}

export async function parseDocs(page: string) {
  const file = path.join(DOCS_FOLDER, page, page + "-usage.md");

  if (!fs.existsSync(file)) {
    return null;
  }
  const usageDoc = fs.readFileSync(file, { encoding: "utf8" });
  const { remarkParse, unified, sectionize, normalize } = await imports();

  const tree = unified()
    .use(remarkParse as any)
    .parse(usageDoc) as any;

  normalize(tree);
  sectionize(tree);

  return generateSections(tree);
}
