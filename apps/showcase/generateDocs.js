const fs = require("fs");
const path = require("path");
const watch = require("node-watch");

const docsFolder = path.resolve(__dirname, "src/docs");

function getFiles(directory) {
  return fs
    .readdirSync(directory)
    .filter((file) => {
      return fs.statSync(path.join(directory, file)).isFile();
    })
    .map((file) => path.join(directory, file));
}

function getDirectories(directory) {
  return fs
    .readdirSync(directory)
    .filter((file) => {
      return fs.statSync(path.join(directory, file)).isDirectory();
    })
    .map((dir) => path.join(directory, dir));
}

function getLanguage(extension) {
  const languages = {
    html: "html",
    javascript: "ts,js",
    scss: "scss",
    command: "sh",
  };

  return Object.keys(languages).find((language) => {
    return languages[language].split(",").includes(extension);
  });
}

function generateCode(files) {
  return files.map((file) => {
    const extension = path.extname(file).replace(/^./, "");

    const fileName = path.basename(file);
    const fileContents = fs.readFileSync(file, { encoding: "utf8" });

    return {
      language: getLanguage(extension),
      fileName: fileName,
      template: fileContents,
    };
  });
}

function execute(directory, docs) {
  const directories = getDirectories(directory);
  const files = getFiles(directory);

  if (files.length) {
    docs[directory.replace(docsFolder + "/", "")] = generateCode(files);
  }
  if (directories.length) {
    directories.forEach((directory) => execute(directory, docs));
  }
}

function generateDocs() {
  const result = {};

  const directories = getDirectories(docsFolder);

  directories.forEach((directory) => execute(directory, result));

  fs.writeFileSync(path.join(docsFolder, "index.ts"), `export const docs = ${JSON.stringify(result, null, 2)}`);
}

module.exports = () => {
  return new Promise(() => {
    watch(docsFolder, { recursive: true, filter: (f) => !/index.ts/.test(f) }, () => {
      generateDocs();
    });
  });
};
