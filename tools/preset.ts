const manager = require.resolve("./manager");
const preview = require.resolve("./preview");

const managerEntries = (entries = []) => [...entries, manager];
const previewAnnotations = (entries = []) => [...entries, preview];

export default {
  managerEntries,
  previewAnnotations,
};
