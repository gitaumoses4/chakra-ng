import * as fs from "fs";
import * as path from "path";
import * as watch from "node-watch";
import { parseDocs } from "./parseDocs";
import { DOCS_FOLDER } from "./constants";

function getDirectories(section: string) {
  const fullDir = path.join(DOCS_FOLDER, section);
  return fs.readdirSync(fullDir).filter((file) => {
    return fs.statSync(path.join(fullDir, file)).isDirectory();
  });
}

async function generateDocs() {
  const categories = getDirectories("");

  const docs = {};

  for (const category of categories) {
    const pages = getDirectories(category);

    docs[category] = {};

    for (const page of pages) {
      const pageDocs = await parseDocs(category, page);

      if (pageDocs) {
        docs[category][page] = pageDocs;
      }
    }
  }

  const generated = `import { Docs } from '../types';\nexport const docs: Docs = ${JSON.stringify(docs, null, 2)}`;

  // remove all quotes from the demo property in the generated docs
  const regex = /"component": "(.*)"/g;
  const subst = `"component": import("./$1")`;
  const result = generated.replace(regex, subst);

  fs.writeFileSync(path.join(DOCS_FOLDER, "index.ts"), result);
}
const watchForChanges = true;

generateDocs().then(() => {
  if (watchForChanges) {
    console.log("Listening for changes...");
    watch.default(DOCS_FOLDER, { recursive: true, filter: (f) => !/index.ts/.test(f) }, () => {
      console.log("Generating docs...");
      generateDocs().then(() => {
        console.log("Docs generated!");
      });
    });
  }
});
