import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import dts from "rollup-plugin-dts";
import fs from "fs"

const modulesDir = "entries"
let modules = fs.readdirSync(modulesDir)
  .map((nameWithExtension) => nameWithExtension.split(".")[0])

modules = ["forms", "modals"]
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
        peerDepsExternal(),
        resolve(),
        commonjs(),
        getBabelOutputPlugin({
          plugins: ["babel-plugin-styled-components"]
        }),
        typescript({ tsconfig: "./tsconfig.json" }),
      ],
    }
  }),
  // ...modules.map((module) => {
  //   return {
  //     input:  `./dist/types/${module}.d.ts`,
  //     output: {
  //       file:   `dist/${module}.d.ts`,
  //       format: "es",
  //     },
  //     plugins: [
  //       dts({
  //         compilerOptions: {
  //           baseUrl: "./dist/types",
  //         },
  //       })
  //     ],
  //   }
  // }),
  // {
  //   input:  "src/index.tsx",
  //   output: {
  //     file: "dist/index.js",
  //     exports: "named",
  //     format: "cjs",
  //     sourcemap: true,
  //     strict: false
  //   },
  //   plugins: [
  //     resolve(),
  //     commonjs(),
  //     typescript({ tsconfig: "./tsconfig.json" }),
  //   ],
  //   external: ['react', 'react-dom', "styled-components"]
  // },
]
