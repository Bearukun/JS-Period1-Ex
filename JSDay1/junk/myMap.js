var numbers = [1,2,3,4];

var times10 = numbers.map(function(num){
    return num*10;
});

function cmap(arr, callback){
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        temp[i] = callback(arr[i]);
    }
    return temp;

}

var times10c = cmap(numbers, (numb) => numb * 10);

console.log(times10c);


