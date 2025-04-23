const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, 'packages');
const aliases = {};

fs.readdirSync(baseDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .forEach((dir) => {
    const pkgPath = path.join(baseDir, dir.name, 'package.json');
    const srcPath = path.join(baseDir, dir.name, 'src');
    if (fs.existsSync(pkgPath) && fs.existsSync(srcPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
      aliases[pkg.name] = `path.resolve(__dirname, '../../packages/${dir.name}/src')`;
    }
  });

console.log('// Copie e cole abaixo no resolve.alias do seu vite.config.ts:\n');
console.log('alias: {');
for (const [name, aliasPath] of Object.entries(aliases)) {
  console.log(`  '${name}': ${aliasPath},`);
}
console.log('}');
