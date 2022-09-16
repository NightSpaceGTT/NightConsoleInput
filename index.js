const readlineSync = require('readline-sync');

const input = ask => {
    const consoleInput = readlineSync.question(ask);
    return consoleInput;
}

module.exports = { input };