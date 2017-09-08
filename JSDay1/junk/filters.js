var people = ['Jan', 'Peter', 'Ib', 'Nanna', 'Maria'];

console.log("Original list: " + people + "\n");

//1 Using existing functions that takes a callback as an argument
var filtered = people.filter(function(person){
        return person.length <= 3;
});

console.log("Using filter method: " + filtered);

var mapped = people.map(function(person){
        return person.toUpperCase();
});

console.log("Using mapping method: " + mapped);

//2 Implement user defined functions that take callbacks as an argument

function myFilter(array, callback){
    var filteredArray = [];
    array.forEach(function(person) {
        if(callback(person)){
            filteredArray.push(person);
        }
     
    });
    return filteredArray;
}

console.log("Using myFilter!: " + myFilter(people, function(person){
    if(person.length <= 3){
        return person;
    }
}));

function myMap(array, callback){
    var filteredArray = [];
    array.forEach(function(person) {
       filteredArray.push(callback(person));
    });
    return filteredArray;
}

console.log("Using myMap: " + myMap(people, function(person){
     return person.toUpperCase();
}));
//Eller
function myMap(array, callback){
    var filteredArray = [];
    array.forEach(function(person) {
       filteredArray.push(callback(person));
    });
    return filteredArray;
}

console.log("Using myMap: " + myMap(people, person => person.toUpperCase()));
//Eller
function myMap(array, callback){
    var filteredArray = [];
    array.forEach(element => filteredArray.push(callback(element)));
    return filteredArray;
}

console.log("Using myMap: " + myMap(people, person => person.toUpperCase()));


//Prototype

//Custom Map
var names = ["Gorm", "Christian", "Thomas", "Hans","Bo","Jim","Kim"];
var namesAgain = ["Carsten", "Bjørn", "Kim", "Fin","Mike","Bo","Michael"];

Array.prototype.test3 = function(){
    return this.length;
}

console.log(namesAgain.test3());

//console.log(names.test2);

Array.prototype.SecondMap = function(callback) {
    var tempArra = [];
   // console.log(names);
    for (var index = 0; index < this.length; index++) {

        tempArra.push(callback(this[index]));

    }

    return tempArra;

};

//ES5
var results = names.SecondMap(function (name) {
    return name.toUpperCase();
})

//ES6
var results2 = names.SecondMap( name => name.toUpperCase() );

//ES6
var results23 = namesAgain.SecondMap(name => name.toUpperCase());

console.log(results23);

console.log(results);

console.log(results2)