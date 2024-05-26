const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const dts = require('rollup-plugin-dts');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const {terser} = require('rollup-plugin-terser');
const path = require('path');

const pkg = require('./package.json');

const LIB_TSCONFIG = path.resolve(__dirname, 'tsconfig.lib.json');
const MERGED_TYPINGS_INPUT = path.resolve(__dirname, path.join('dist', 'esm', 'types', 'index.d.ts'));
const MERGED_TYPINGS_OUTPUT = path.resolve(__dirname, path.join('dist', 'index.d.ts'));

module.exports = [
  {
    cache: false,
    input: path.join(__dirname, 'src', 'index.ts'),
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        exportConditions: ['node'],
      }),
      commonjs(),
      typescript({tsconfig: LIB_TSCONFIG}),
      terser(),
    ],
  },
  {
    cache: false,
    external: [/\.s?css$/],
    input: MERGED_TYPINGS_INPUT,
    output: [{file: MERGED_TYPINGS_OUTPUT, format: 'esm'}],
    plugins: [dts.default()],
  },
];
