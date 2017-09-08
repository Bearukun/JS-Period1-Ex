var numbers = [2,3,67,33];

var reducer = function(accumulator, item){
    return accumulator + item; 
}

var initialValue = 0; 

var result = numbers.reduce(reducer, initialValue);

console.log(result);

