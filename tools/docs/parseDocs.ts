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

async function generateSections(node: any, category: string, page: string, parentId = "") {
  if (!node) return null;
  if (node?.type === "root") return generateSections(node.children[0], category, page);

  let title = (node?.children?.[0]?.children?.[0]?.value || "").replace(/ +$/g, "");

  const customId = title.match(/ {#([^]+?)}$/);

  const id = customId ? customId[1] : _.kebabCase(title);

  if (customId) {
    title = title.substring(0, customId.index);
  }

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

  section.demo = getDemo(path.join(category, page, section.id));

  if (node.children) {
    for (const child of node.children) {
      if (child.type === "section") {
        const childSection = await generateSections(child, category, page, section.path);
        if (childSection) {
          section.sections.push(childSection);
        }
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

export async function parseDocs(category: string, page: string) {
  const file = path.join(DOCS_FOLDER, category, page, page + "-usage.md");

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

  return generateSections(tree, category, page, category);
}
