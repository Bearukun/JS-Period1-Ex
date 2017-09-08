var fs = require('fs');

//var testFile = fs.readFileSync('./exercise3text.txt');
//var testFile = fs.readFileSync(process.argv[2]);



//console.log(testFile.toString().split('\n').length-1);

console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1);
//console.log(process.argv[2].toString().split('\n').length);