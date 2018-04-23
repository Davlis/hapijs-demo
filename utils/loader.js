const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

module.exports = (alternativePath) => {
    const files = [];
    fs.readdirSync(path.join(__dirname, alternativePath))
        .filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
        .forEach((file) => {
            files.push(file);
        });
    return files;
};
