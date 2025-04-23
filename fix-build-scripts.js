const fs = require("fs");
const path = require("path");

const packagesDir = path.join(__dirname, "packages");

const updatePackageJson = (pkgPath) => {
  const packageJsonPath = path.join(pkgPath, "package.json");

  if (!fs.existsSync(packageJsonPath)) return;

  const json = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  json.scripts = json.scripts || {};

  if (!json.scripts.build) {
    json.scripts.build = "tsc";
    console.log(`✅ Adicionado script de build em: ${packageJsonPath}`);
  } else {
    console.log(`ℹ️ Já tem script de build: ${packageJsonPath}`);
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(json, null, 2));
};

fs.readdirSync(packagesDir).forEach((folder) => {
  const fullPath = path.join(packagesDir, folder);
  if (fs.statSync(fullPath).isDirectory()) {
    updatePackageJson(fullPath);
  }
});
