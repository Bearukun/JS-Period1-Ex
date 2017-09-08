var fs = require('fs');


fs.readFile(process.argv[2], 'utf8',function callback(err, data){

    if(err){
        return err;
    }else{
        console.log(data.toString().split("\n").length - 1);
    }

});


