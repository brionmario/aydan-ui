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
import path from 'path';
import {mkdir, existsSync, rm, writeFile} from 'fs-extra';
import getShadCNRegistryIndex from '../utils/getShadCNRegistryIndex';
import {Registry, Style, Styles} from '../types/registry';
import getShadCNStylesIndex from '../utils/getShadCNStylesIndex';
import getRegistryBaseColors from '../utils/getRegistryBaseColors';
import getShadCNColorsIndex from '../utils/getShadCNColorsIndex';
import getShadCNComponentIndex from '../utils/getShadCNComponentIndex';

const add: Command = new Command()
  .name('snapshot')
  .description('takes a snapshot of the current @shadcn/ui components.')
  .option('-y, --yes', 'skip confirmation prompt.', true)
  .option('-o, --overwrite', 'overwrite existing files.', false)
  .option('-c, --cwd <cwd>', 'the working directory. defaults to the current directory.', process.cwd())
  .action(async options => {
    try {
      const cwd: string = path.resolve(options.cwd);

      if (!existsSync(cwd)) {
        console.error(`The path ${cwd} does not exist. Please try again.`);
        process.exit(1);
      }

      const registryPath: string = path.resolve(cwd, '..', 'aydan-ui-react', '__registry__');

      if (!existsSync(registryPath)) {
        await mkdir(registryPath, {recursive: true});
      } else {
        console.info(`The registry path ${registryPath} already exists. Clearing it first.`);
        await rm(registryPath, {recursive: true});
        await mkdir(registryPath, {recursive: true});
      }

      // Create the index file (https://ui.shadcn.com/registry/index.json)
      const registryIndex: Registry = await getShadCNRegistryIndex();

      await writeFile(path.resolve(registryPath, 'index.json'), JSON.stringify(registryIndex, null, 2));

      console.debug(`Registry index file created at ${path.resolve(registryPath, 'index.json')}`);

      // Create the style index file (https://ui.shadcn.com/registry/styles/index.json).
      const stylesPath: string = path.resolve(registryPath, 'styles');

      const stylesIndex: Styles = await getShadCNStylesIndex();

      await mkdir(stylesPath, {recursive: true});
      await writeFile(path.resolve(stylesPath, 'index.json'), JSON.stringify(stylesIndex, null, 2));

      console.debug(`Styles index file created at ${path.resolve(stylesPath, 'index.json')}`);

      // Create the colors files (https://ui.shadcn.com/registry/colors/{color}.json)
      const colorsPath: string = path.resolve(registryPath, 'colors');
      await mkdir(colorsPath, {recursive: true});

      const baseColors: Styles = await getRegistryBaseColors();

      console.debug(`Base colors: ${JSON.stringify(baseColors, null, 2)}`);

      baseColors.forEach(async (baseColor: Style) => {
        const colorsIndex: Styles = await getShadCNColorsIndex(baseColor.name);

        await writeFile(path.resolve(colorsPath, `${baseColor.name}.json`), JSON.stringify(colorsIndex, null, 2));

        console.debug(`Colors index file created at ${path.resolve(colorsPath, `${baseColor.name}.json`)}`);
      });

      // Create the components files (https://ui.shadcn.com/registry/styles/{style}/{component}.json)
      stylesIndex.forEach(async (style: Style) => {
        mkdir(path.resolve(stylesPath, style.name), {recursive: true});
      });

      registryIndex.forEach(async component => {
        stylesIndex.forEach(async style => {
          const content = await getShadCNComponentIndex(style.name, [component]);
          await writeFile(
            path.resolve(stylesPath, style.name, `${component.name}.json`),
            JSON.stringify(content, null, 2),
          );

          console.debug(`Component file created at ${path.resolve(stylesPath, style.name, `${component.name}.json`)}`);
        });
      });
    } catch (error) {
      console.log(error);
    }
  });

export default add;
