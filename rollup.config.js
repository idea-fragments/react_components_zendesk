import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import typescript from "@rollup/plugin-typescript"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import { getBabelOutputPlugin } from "@rollup/plugin-babel"
import dts from "rollup-plugin-dts"
import postcss from "rollup-plugin-postcss"
import fs from "fs"

const modulesDir = "src/entries"
let modules = fs
  .readdirSync(modulesDir)
  .map((nameWithExtension) => nameWithExtension.split(".")[0])

// modules = [
//   // "forms",
//   "hooks",
//   // "layouts",
//   // "media",
//   // "modals",
//   // "notifications",
//   // "styles",
//   // "tables",
//   // "tags",
//   // "text",
//   // "tooltips",
//   // "utilities",
// ]

const config = [
  ...modules.map((module) => {
    return {
      input: `src/entries/${module}.ts`,
      output: {
        exports: "named",
        file: `dist/${module}.js`,
        format: "cjs",
        sourcemap: true,
        strict: false,
      },
      external: [
        // Node.js built-in modules that should not be bundled
        "worker_threads",
        "path",
        "fs",
        "util",
        "stream",
        "http",
        "https",
        "url",
        "zlib",
        "punycode",
        "crypto",
        "os",
        "events",
        "buffer",
      ],
      plugins: [
        peerDepsExternal(),
        resolve({
          browser: true,
          preferBuiltins: false,
        }),
        json(),
        commonjs(),
        postcss({
          extract: false,
          minimize: true,
          modules: false,
        }),
        getBabelOutputPlugin({
          plugins: ["babel-plugin-styled-components"],
        }),
        typescript({ tsconfig: "./tsconfig.json" }),
      ],
    }
  }),
  ...modules.map((module) => {
    return {
      input: `dist/entries/${module}.d.ts`,
      output: {
        file: `dist/types/${module}.d.ts`,
        format: "cjs",
      },
      plugins: [dts({ compilerOptions: { baseUrl: "./dist/" } })],
    }
  }),
]

export default config
