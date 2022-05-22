import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";
import pkg from './package.json'
import fs from "fs"

const modulesDir = "entries"
const modules = fs.readdirSync(modulesDir)
  .map((nameWithExtension) => nameWithExtension.split(".")[0])

export default [
  ...modules.map((module) => {
    return {
      input:  `entries/${module}.ts`,
      output: {
        file:   `dist/${module}.js`,
        exports: "named",
        format: "cjs",
        sourcemap: true,
        strict: false
      },
      plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
      ],
      external: ["react", "react-dom"]
    }
  }),
  {
    input:  "src/index.tsx",
    output: {
      file: "dist/index.js",
      exports: "named",
      format: "cjs",
      sourcemap: true,
      strict: false
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: ['react', 'react-dom']
  },
]
