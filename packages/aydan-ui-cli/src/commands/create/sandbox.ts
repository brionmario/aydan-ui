import {Command} from 'commander';
import {resolve, join} from 'path';
import {chdir, cwd as getCwd} from 'process';
import {mkdir, existsSync, rm, writeFile} from 'fs-extra';
import {exec} from 'child_process';
import util from 'util';
import getShadCNRegistryIndex from '../../utils/getShadCNRegistryIndex';
import {Registry} from '../../types/registry';

const execPromise = util.promisify(exec);

const sandbox: Command = new Command()
  .name('sandbox')
  .description(
    'Creates a sandbox environment for the CLI to diff the latest changes from remote (@shadcn/ui) and the local.',
  )
  .option('-y, --yes', 'skip confirmation prompt.', true)
  .option('-o, --overwrite', 'overwrite existing files.', false)
  .option('-c, --cwd <cwd>', 'the working directory. defaults to the current directory.', process.cwd())
  .action(async options => {
    try {
      const cwd: string = resolve(options.cwd);

      // Validate the working directory
      if (!existsSync(cwd)) {
        console.error(`The path ${cwd} does not exist. Please try again.`);
        process.exit(1);
      }

      const sandboxPath: string = join(cwd, '.sandbox');
      const appName: string = 'next';

      // Prepare the sandbox directory
      if (existsSync(sandboxPath)) {
        console.info(`The sandbox path ${sandboxPath} already exists. Clearing it first.`);
        await rm(sandboxPath, {recursive: true});
      }
      await mkdir(sandboxPath, {recursive: true});

      // Change to the sandbox directory
      chdir(sandboxPath);
      console.debug(`Changed directory to ${sandboxPath}`);

      // Initialize a new Next.js project
      console.info('Initializing a new Next.js project...');
      const {stdout: initStdout, stderr: initStderr} = await execPromise(
        `yes no | npx create-next-app@latest ${appName} --typescript --eslint --tailwind --app --use-pnpm --turbopack --import-alias '@/*' --no-src-dir`,
      );
      console.debug(initStdout);
      if (initStderr) console.error(initStderr);

      // Change to the newly created Next.js app directory
      const appPath = join(sandboxPath, appName);
      chdir(appPath);
      console.debug('Changed directory to app path: ', appPath);

      // Print the current working directory
      console.debug('Currently working inside: ', getCwd());

      // Install dependencies
      console.info('Installing dependencies...');
      const {stdout: installStdout, stderr: installStderr} = await execPromise('pnpm install');
      console.debug(installStdout);
      if (installStderr) console.error(installStderr);

      // Install additional dependencies and initialize TailwindCSS
      console.info('Installing additional dependencies...');
      await execPromise('pnpm add @aydan-ui/react @aydan-ui/utils @aydan-ui/tailwindcss');
      // await execPromise('pnpm add --save-dev tailwindcss');
      // await execPromise('npx tailwindcss init');
      await execPromise('npx shadcn@latest init -d --force');

      // Fetch the ShadCN registry index
      console.info('Fetching ShadCN registry index...');
      const registryIndex: Registry = await getShadCNRegistryIndex();

      // Sequentially add components from the registry index
      console.info('Adding components from the ShadCN registry sequentially...');
      for (const item of registryIndex) {
        console.info(`Adding component: ${item.name}`);
        try {
          const {stdout, stderr} = await execPromise(`npx shadcn@latest add ${item.name}`);
          console.debug(stdout);
          if (stderr) console.error(stderr);
        } catch (error) {
          console.error(`Failed to add component ${item.name}: ${error.message}`);
        }
      }

      console.info('Sandbox environment setup complete!');
    } catch (error) {
      console.error(`Error during sandbox setup: ${error.message}`);
    }
  });

export default sandbox;
