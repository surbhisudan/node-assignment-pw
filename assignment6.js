const os = require('os');

const osName = os.platform();
const osVersion = os.release();

console.log('Operating System:', osName);
console.log('OS Release Version:', osVersion);
