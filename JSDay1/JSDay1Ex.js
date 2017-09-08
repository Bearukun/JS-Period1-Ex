var names = ["Gorm", "Christian", "Thomas", "Hans","Bo","Jim","Kim"];
console.log(names);
console.log("-----------");

//Assignment 1
//Filter Method
var filterNames = names.filter(function(names){
    return names.length <= 3;
}
)
console.log("Filtered Names:")
console.log("Filter Method: " + filterNames);

//Map Method
var mappedNames = names.map(function(names){
    return names.toUpperCase();
})
console.log("---------")
console.log("Mapped Names:")
console.log("Map Method: " + mappedNames);
console.log("---------")

//Assignment 2
//Custom Filter & Map

//Custom Filter
function myFilter(array, callback){
        var filteredArray = [];
        array.forEach(function(person) {
       
        if(callback(person)){
                filteredArray.push(person);
            }
}  
         
        );
        return filteredArray;
    }
    //ES5
    console.log("Custom Filter: " + myFilter(names, function(person){
        if(person.length <= 3){
            return person;
    }
    }));

    //ES6 - NOT WORKING!
    //var newCusFulter = myFilter(names, name => {if (name.length <= 3){name}} );
    //console.log(newCusFulter.length);

//Custom Map
function customMap(arr, callback) {
    var tempArra = [];
    for (var index = 0; index < arr.length; index++) {

        tempArra.push(callback(arr[index]));

    }

    return tempArra;
    
}
//ES5
var es5res = customMap(names, function (name) {
    return name.toUpperCase();
})

//ES6
var es6res = customMap(names, name => name.toUpperCase() );

console.log("Custom Map ES5: " + es5res);

console.log("Custom Map ES6: " + es6res)


//Assignemnt 3
//ProtoTypes

//Custom Filter Method
Array.prototype.myFilterArrMeth = function myFilter(callback){
        var filteredArray = [];
        this.forEach(function(person) {
       
        if(callback(person)){
                filteredArray.push(person);
            }
}  
         
        );
        return filteredArray;
    }
    //ES5
    console.log("Custom Filter on Array ES5: " + names.myFilterArrMeth(function(person){
        if(person.length <= 3){
            return person;
    }
    }));


//Custom Map Arr Method
Array.prototype.customMapArrMethod = function(callback) {
    var tempArra = [];
   // console.log(names);
    for (var index = 0; index < this.length; index++) {

        tempArra.push(callback(this[index]));

    }

    return tempArra;

};

//ES5
var es5cusArrMet = names.customMapArrMethod(function (name) {
    return name.toUpperCase();
})

//ES6
var es6cusArrMet = names.customMapArrMethod( name => name.toUpperCase() );

console.log("Custom Map Method on Array ES5: " + es5cusArrMet);
console.log("Custom Map Method on Array ES6: " + es6cusArrMet);

//Assignment 5 - Reduce

//A
var allOG= ["Lars", "Peter", "Jan", "Bo"];
console.log(allOG.join(","));
console.log(allOG.join(" "));
console.log(allOG.join("#"));

//B

var reduceNumbers = [2,3,67,33];
var reducer = function(accumulator, item){
    return accumulator + item;
}

var initialvalue = 0; 
var testRed = reduceNumbers.reduce(reducer,initialvalue);
console.log(testRed);

//C
var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]
var reduceFindAverageAge = function(accumulator, member, index,arr){
    return accumulator + (member.age / arr.length)
}

var initValue = 0;
var testAge = members.reduce(reduceFindAverageAge,initValue);
console.log(testAge);



