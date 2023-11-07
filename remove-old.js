const fs = require('fs');
const path = require('path');

// Get the current working directory
const workingDir = process.cwd();

// Read the contents of the working directory
fs.readdir(workingDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Find the first JSON file in the directory
    const jsonFile = files.find(file => path.extname(file) === '.json');

    if (jsonFile) {
        // Read the contents of the JSON file
        fs.readFile(path.join(workingDir, jsonFile), 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            const jsonData = JSON.parse(data);
            console.log('JSON data:', jsonData);
        });
    } else {
        console.log('No JSON file found in the directory');
    }
});