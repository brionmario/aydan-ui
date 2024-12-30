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
import {resolve} from 'path';
import {chdir} from 'process';
import {mkdir, existsSync, rm} from 'fs-extra';
import executeCommand from '../../utils/executeCommand';

const component: Command = new Command()
  .name('component')
  .description('Creates a component with `shadcn@latest add`.')
  .argument('<componentName>', 'name of the component to create')
  .option('-y, --yes', 'skip confirmation prompt.', true)
  .option('-o, --overwrite', 'overwrite existing files.', false)
  .option('-c, --cwd <cwd>', 'the working directory. defaults to the current directory.', process.cwd())
  .action(async (componentName: string, options) => {
    try {
      const cwd: string = resolve(options.cwd);

      if (!existsSync(cwd)) {
        console.error(`The path ${cwd} does not exist. Please try again.`);
        process.exit(1);
      }

      const componentFolderPath: string = resolve(cwd, componentName);

      if (!existsSync(componentFolderPath)) {
        await mkdir(componentFolderPath, {recursive: true});
      } else {
        console.info(`The component path ${componentFolderPath} already exists. Clearing it first.`);
        await rm(componentFolderPath, {recursive: true});
        await mkdir(componentFolderPath, {recursive: true});
      }

      // cd into sandbox and initialize a npm project.
      chdir(componentFolderPath);

      console.debug(`Changed directory to ${componentFolderPath}`);

      await executeCommand(`npx shadcn@latest add ${componentName}`);
    } catch (error) {
      console.error(`Failed to create the component: ${error}`);
    }
  });

export default component;
