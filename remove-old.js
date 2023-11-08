const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');

const projectDirContents = fs.readdirSync(__dirname);

const projectFiles = projectDirContents.filter(
  (filePath) => path.extname(filePath) === '.json'
);

if (projectFiles.length > 0) {
  // Assume first JSON file is project file
  const projectFile = projectFiles[0];
  console.log(`found ${projectFile}`);
  if (fs.existsSync(assetsDir) && fs.lstatSync(assetsDir).isDirectory()) {
    const assetsFiles = fs.readdirSync(assetsDir);
    assetsFiles.forEach((filePath) => {});
  }
}
