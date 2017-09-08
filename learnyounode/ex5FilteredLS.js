const fs = require('fs');
const path = require('path');

var ext = process.argv[3];
//var dir = './';
var dir = process.argv[2];

fs.readdir(dir, function callback(err,files){

    if(err){
        return err;
    }
    if(ext){
        files.filter(function(file){
            if(path.extname(file) == "."+ext){
                console.log(file);
            }
        });
    }
});