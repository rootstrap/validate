import pkg from "./package.json";

export default {
  input: "src/index.js",
  external: ["lodash"],
  output: [{ file: pkg.main, format: "cjs" }],
};
