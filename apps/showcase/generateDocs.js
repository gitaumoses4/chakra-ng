const fs = require("fs");
const path = require("path");
const watch = require("node-watch");

const docsSrcFolder = path.resolve(__dirname, "src/docs");

function docFiles(filePrefix) {
  return {
    markdown: filePrefix + ".md",
    html: filePrefix + ".demo.html",
    scss: filePrefix + ".demo.scss",
    typescript: filePrefix + ".demo.ts",
  };
}

function getCodeContent(file) {
  const content = fs.readFileSync(file, { encoding: "utf-8" });

  // double the tabs to make it work with the markdown code block
  return content.replace(/\n( +)/g, "\n$1$1");
}

function getDocs(section) {
  const fullDir = path.join(docsSrcFolder, section);

  const filePrefix = section.replace("/", "-");

  const files = fs.readdirSync(fullDir).filter((file) => {
    return fs.statSync(path.join(fullDir, file)).isFile();
  });

  const allowedFiles = docFiles(filePrefix);

  return Object.keys(allowedFiles).reduce((acc, cur) => {
    if (files.includes(allowedFiles[cur])) {
      return {
        ...acc,
        [cur]: {
          fileName: allowedFiles[cur],
          language: cur,
          content: getCodeContent(path.join(fullDir, allowedFiles[cur])),
        },
      };
    }
    return acc;
  }, {});
}

function getSections(section) {
  const fullDir = path.join(docsSrcFolder, section);
  return fs.readdirSync(fullDir).filter((file) => {
    return fs.statSync(path.join(fullDir, file)).isDirectory();
  });
}

function parseMarkdownFile(file) {
  if (file) {
    const contentSections = file.content.split("---\n");

    if (contentSections.length < 3) {
      return {
        header: {},
        content: file.content,
      };
    }

    const contentBetweenMarkers = contentSections[1].trim();

    const lines = contentBetweenMarkers.split("\n");

    // Initialize an empty object
    const parsedObject = {};

    let previousKey = null;

    lines.forEach((line) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        parsedObject[key] = line.slice(colonIndex + 1).trim();

        previousKey = key;
      } else {
        if (previousKey) {
          parsedObject[previousKey] += " \n" + line.trim();
        }
      }
    });

    return {
      header: parsedObject,
      content: contentSections.slice(2).join("---\n"),
    };
  }
}

function buildDocs(section, files) {
  const docs = {
    id: section,
    title: "",
    description: "",
    content: "",
    code: [],
  };

  if (files.markdown) {
    const parsedMarkdown = parseMarkdownFile(files.markdown);

    docs.title = parsedMarkdown.header.title;
    docs.description = parsedMarkdown.header.description;
    docs.content = parsedMarkdown.content;
  }

  Object.keys(files).forEach((file) => {
    if (file !== "markdown") {
      docs.code.push({
        language: file,
        content: files[file].content,
        fileName: files[file].fileName,
      });

      if (file === "typescript") {
        docs.demo = path.join(section, section.replace("/", "-") + ".demo");
      }
    }
  });

  return docs;
}

function generateDocsForSection(parentSection, section) {
  const subSections = getSections(path.join(parentSection, section));
  const files = getDocs(path.join(parentSection, section));

  const docs = {
    id: section,
    ...buildDocs(path.join(parentSection, section), files),
  };

  docs.sections = subSections.map((subSection) => {
    return generateDocsForSection(path.join(parentSection, section), subSection);
  });

  return docs;
}

function generateDocs() {
  const pages = getSections("");

  const docs = pages.reduce((acc, sectionDir) => ({ ...acc, [sectionDir]: generateDocsForSection("", sectionDir) }), {});

  const generated = `import { Docs } from '../types';\nexport const docs: Docs = ${JSON.stringify(docs, null, 2)}`;

  // remove all quotes from the demo property in the generated docs
  const regex = /"demo": "(.*)"/g;
  const subst = `"demo": import("./$1")`;
  const result = generated.replace(regex, subst);

  fs.writeFileSync(path.join(docsSrcFolder, "index.ts"), result);
}

generateDocs();

module.exports = () => {
  return new Promise(() => {
    watch(docsSrcFolder, { recursive: true, filter: (f) => !/index.ts/.test(f) }, () => {
      generateDocs();
    });
  });
};
