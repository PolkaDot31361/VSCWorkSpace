const path = require('path');
const os = require('os');


var pathObj = path.parse(__filename);
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log("Total Memory : " + totalMemory);
// console.log("Free Memory : " + freeMemmory);

console.log(`Total Memory : ${totalMemory}`)
console.log(`Free Memory : ${freeMemory}`)


console.log(pathObj);


