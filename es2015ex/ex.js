/* ex-1 */

//Constants
const PI = 3.141593;

console.log(PI);

//Assigning PI to another value will give a TypeError
//PI = 2;
//console.log(PI);

//Scoping

//Block-Scoped Variables
if (true) {
    //Using var, the variable 'b' WILL be hoisted!
    //var b = "b-value";

    //Using let, the variable 'b' will NOT be hoisted
    let b = "b-value";
    console.log("e");
}

//console.log(b);

//Block-Scoped Functions
{
    function foo() { return 1; }
    foo() === 1;
    {
        function foo() { return 2; }
        foo() === 2;
    }
    foo() === 1;
}


/* ex-2 */

//a1
let evens = [2, 4, 6, 8, 10];

//a2 
//This works because it's not block-scoped like the other example. So it will 
//return the v + 1 statement.
odds = evens.map(v => v + 1)

//workaround
var odds2 = evens.map(v => {
    return v + 1
});

pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums = evens.map((v, i) => v + i)

console.log("Odds: " + odds + " - Pairs: " + pairs + " - Nums" + nums);
console.log(odds2);


/* ex-3 */

//A

//The ES5 way
function NumbersES5(numbs) {
    var self = this;
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            self.fives.push(v);
        }
    });
}
var numbersEs5 = new NumbersES5([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbersEs5.fives);


//The ES2015 (ES6) way
function Numbers(numbs) {

    this.nums = numbs;
    this.fives = [];
    this.nums.forEach((v) => {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    });
}
let numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives);


//B
console.log("B\n")
/* var counter = {
    count: 0,
    inc: function () {
      this.count++;
    }
  } */

var counter = {
    count: 0,
    inc: () => {
        console.log("Hej");
        this.count++;
    }
}
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one

//Makes it worse, the value of 'count' does not change at all.


/* ex-4 */
console.log("Ex-4\n");

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name}, want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitprice} bucks?`

console.log(message);


/* ex-5 - Rest parameter and the spread operator */
console.log("Ex-5\n");

//A
function f(...args) {
    let returnString = "";
    returnString += `Sum: ${args.length}`;
    for (var index = 0; index < args.length; index++) {
        returnString += "\nrest value " + index + " is a: " + args[index].constructor.name;
    }
    return returnString;
}

//console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));

//B
var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
var restParams = [...rest];
//console.log(f(5,2,...restParams));

//C
console.log(chars = [...f(5, 2, ...restParams)]);


/* ex-6 */

let user = {
    fName: "Kurt",
    lName: "Wonnegut",
    age: 98
}


/* ex-7 */

//A - Array Matching
let fName = "Kurt", lName = "Wonnegut";
console.log(`First: ${fName}, Last: ${lName}`);
[fname, lName] = [lName, fName];
console.log(`First: ${fName}, Last: ${lName}`);

//B - Shorthand Notation
function getPerson() {
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender: "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}

let {lastName, phone} = getPerson();

console.log(lastName + " " + phone);


/* ex-8 */

//import * as fFunc from "./myModule/fModule.js";

//console.log(fFunc.f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));


/* ex-8 */

class Shape {
    constructor(color){
      this._color = color;
    }  
    getArea() {
      return undefined;
    }
    getPerimeter() {
      return undefined;
    }
  }

  