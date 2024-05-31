/**
 * MIT License
 *
 * Copyright (c) 2024, Brion Mario
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import {terser} from 'rollup-plugin-terser';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import {RollupOptions} from 'rollup';
import pkg from './package.json' assert {type: 'json'};

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
const __dirname: string = dirname(fileURLToPath(import.meta.url));

const LIB_TSCONFIG: string = path.resolve(__dirname, 'tsconfig.lib.json');
const MERGED_TYPINGS_INPUT: string = path.resolve(__dirname, path.join('dist', 'esm', 'types', 'index.d.ts'));
const MERGED_TYPINGS_OUTPUT: string = path.resolve(__dirname, path.join('dist', 'index.d.ts'));

const rollupConfig: RollupOptions[] = [
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
    plugins: [dts()],
  },
];

export default rollupConfig;
