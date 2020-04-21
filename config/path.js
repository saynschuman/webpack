const path = require("path");

const rootDir = path.resolve(__dirname, "..");

const configPaths = {
  entryMain: path.resolve(rootDir, "src/index.js"),
  htmlTemplate: path.resolve(rootDir, "public/template.html"),
  absolute: {
    dist: path.resolve(rootDir, "dist"),
  },
};

module.exports = configPaths;
