//Hoisting 

//Hoisting is the concept about when a variable or function might be available.
//Javascript basically "looks ahead" in the document.

//console.log(noSuchVariable);
//Fails, beause we have never declared the variable

//console.log(declaredLater); - Outputs Undefined
//var declaredLater = "Now it's defined!"; 
//console.log(declaredLater) - Outputs: Now it's defined!

//Above example is the same as

////var declaredLater;
//console.log(declaredLater); - Outputs Undefined
// declaredLater = "Now it's defined!"; 
//console.log(declaredLater) - Outputs: Now it's defined!

//Examples

//Hoisting Var Example

//var thisVar - Hoisted
//Var thisSecondVar - Hoisted

//thisVar = "Now I'm Defined!";
//thisSecondVar = "Now I'm also defined!"

//Hoisting Function Example
//firstFunction(); - The entire function gets Hoisted
//secondFunction(); - The entire function gets Hoisted
//function firstFunction(){
    //console.log("Hello")
//}
//function secondFunction(){
    //console.log("Hello from function 2")
//}

//NEW RULE:
//var's only gets partially hoisted, while the functions gets fully hoisted!
