const fs = require("fs");
const path = require("path");
const watch = require("node-watch");

const docsSrcFolder = path.resolve(__dirname, "src/docs");
const docsOutFolder = path.resolve(__dirname, "src/assets/docs");

function docFiles(filePrefix) {
  return {
    markdown: filePrefix + ".md",
    typescript: filePrefix + ".demo.ts",
    html: filePrefix + ".demo.html",
    scss: filePrefix + ".demo.scss",
  };
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
          content: fs.readFileSync(path.join(fullDir, allowedFiles[cur]), { encoding: "utf-8" }),
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

function saveDocs(section, files) {
  Object.keys(files).forEach((language) => {
    const file = files[language];

    fs.mkdirSync(path.join(docsOutFolder, section), { recursive: true });
    const outputFile = path.join(docsOutFolder, section, language + ".md");

    const content = language === "markdown" ? file.content : `\`\`\`${language}\n${file.content}\`\`\``;
    fs.writeFileSync(outputFile, content);
  });
}

function generateDocsForSection(parentSection, section) {
  const subSections = getSections(path.join(parentSection, section));
  const files = getDocs(path.join(parentSection, section));

  if (Object.keys(files).length) {
    saveDocs(path.join(parentSection, section), files);
  }

  if (subSections.length) {
    subSections.forEach((subSection) => generateDocsForSection(path.join(parentSection, section), subSection));
  }
}

function generateDocs() {
  const pages = getSections("");

  pages.forEach((sectionDir) => generateDocsForSection("", sectionDir));
}

generateDocs();

module.exports = () => {
  return new Promise(() => {
    watch(docsSrcFolder, { recursive: true, filter: (f) => !/index.ts/.test(f) }, () => {
      generateDocs();
    });
  });
};
