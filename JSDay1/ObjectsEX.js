
//Objects

//1
var myPhone = {};

myPhone.brand = "Apple";
myPhone.year = 2013;
myPhone.model = "iPhone 5S";
myPhone.capacity = 64;
myPhone.color = "Space Grey";
console.log(myPhone);

var testArr = [1,2,3,4,5,5];
var testArr2 = [];


var copyArr = []


console.log(Object.keys(myPhone));

delete myPhone.color;

console.log(Object.keys(myPhone));

console.log(myPhone.hasOwnProperty('year'));
console.log(myPhone.hasOwnProperty('color'));

//2
function person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.get = () => {return "Name: " + firstName + " Surname: " + lastName};
}

var perso = new person("Christian", "Olsen", 900);

console.log(perso.get());