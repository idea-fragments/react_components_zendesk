import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";

export default [
  {
    input:  "entries/alert.ts",
    output: {
      file:   "dist/alert.js",
      format: "es",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  // {
  //   input:  "entries/forms.ts",
  //   output: [
  //     {
  //       file:   "dist/forms.js",
  //       format: "cjs",
  //       sourcemap: true,
  //     },
  //     // {
  //     //   file:   "dist/forms.js",
  //     //   format: "es",
  //     //   sourcemap: true,
  //     // },
  //   ],
  //   plugins: [
  //     resolve(),
  //     commonjs(),
  //     typescript({ tsconfig: "./tsconfig.json" }),
  //   ],
  // },
]
