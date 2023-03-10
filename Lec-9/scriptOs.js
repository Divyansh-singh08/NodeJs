const fs = require('fs');

// fs.renameSync('sciptOs.js','scriptOs.js');

const os = require('os');//plugin OS module

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

// const freeMemory = os.freemem();
// console.log(`${ freeMemory /1024/1024/1024 } this is the free space in os`);

const totalMen = os.totalmem();
console.log(`${ totalMen/1024/1024/1024 } this is the free space in os`);