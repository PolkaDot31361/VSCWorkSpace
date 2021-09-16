
const fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);

fs.readdir('./', function(e, files){
    if (e) {
        console.log('error', e);
    }else{
        console.log('result', files);
    }
});