const fs = require('fs-extra');
const svgr = require('@svgr/core').default;
const path = require('path');
const camelcase = require('camelcase');

const OUTPUT_DIR = path.resolve(__dirname, `../src/icons`);

async function build(type) {
  const directory = path.resolve(__dirname, `../node_modules/heroicons/${type}`);
  const files = await fs.readdir(directory)
  await fs.remove(path.resolve(OUTPUT_DIR, type));
  await fs.mkdirp(path.resolve(OUTPUT_DIR, type));
  const exports = [];
  for (const file of files) {
    const componentName = `${camelcase(file.replace(/\.svg$/, ''), { pascalCase: true })}`
    const fileContent = await fs.readFile(path.resolve(directory, file), 'utf8')
    const componentContent = await svgr(fileContent, {icon: true, typescript: true}, { componentName: `${componentName}Icon` });
    const filePath = path.resolve(OUTPUT_DIR, type, `${componentName}Icon.tsx`)
    await fs.writeFile(filePath, componentContent);
    exports.push(`export { default as ${componentName} } from './${componentName}Icon'`)
  }
  await fs.writeFile(path.resolve(OUTPUT_DIR, type, `index.tsx`), exports.join('\n'));
}

async function run() {
  await build('solid');
  await build('outline');
}

run();