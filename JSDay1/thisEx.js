//this

//In JavaScript "this" always refers to the “owner” of the function we're executing, 
// or rather, to the object that a function is a method of.

//In Java, this refers to the current instance object on which the method is executed.

//this examples
//Global Scope


var person = {
    firstName: "Steve",
    lastName: "Jobs",
    showFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

person.showFullName(); // Steve Jobs

var newQuestion = { 
    the_answer: 42, 
    ask_question: function () { 
     return this.the_answer; 
    } 
   }; 
   
   var the_meaning = newQuestion.ask_question(); 
   console.log(the_meaning);

//this with bind()
var cat = {
    firstName: "Frida",
    lastName: "Olsen",
    getCatName: function(){
        let fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }

}

var catName = function(){
    console.log(this.getCatName() + " I loves you!");
}

var logCat = catName.bind(cat);

logCat();