const path = require("path");

module.exports = {
  entry: "./build/src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "bundle"),
  },
  mode: "production",
};
