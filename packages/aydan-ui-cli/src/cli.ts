#!/usr/bin/env node
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

import {Command} from 'commander';
import {type PackageJson} from 'type-fest';
import snapshot from './commands/snapshot';
import getPackageInfo from './utils/getPackageInfo';
import sandbox from './commands/create/sandbox';
import component from './commands/create/component';

process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));

export default async function main(): Promise<void> {
  // const packageInfo: PackageJson = await getPackageInfo();

  const program: Command = new Command()
    .name('aydan-ui')
    .description('add components and dependencies to your project')
    // .version(packageInfo.version || '1.0.0', '-v, --version', 'display the version number');

  program.addCommand(sandbox);
  program.addCommand(snapshot);
  program.addCommand(component);

  program.parse();
}

main();
