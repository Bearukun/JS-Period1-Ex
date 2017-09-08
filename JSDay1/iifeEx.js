//The primary reason to use an IIFE is to obtain data privacy. 
//Because JavaScript's var scopes variables to their containing function, 
//any variables declared within the IIFE cannot be accessed by the outside world.

function test23(){
    var text = "Hello!";
}

//console.log(text); //text is undefined


//You can easily pass arguments into the IIFE as well

var test = "test text!";
(function (innerText){
console.log(innerText);
})(test);