

// previously we have seen basic declaration and definition of a function using function keyword and knew about return, parameters, arguments, function scope, use of this inside funciton. Now we will explore various ways to define a function.



// function expression

let singHappyBirthday = function(){
    console.log("Happy birthday to you....")
}
singHappyBirthday();


const isEven = function(num){
    return num % 2 === 0;
}
console.log(isEven(5));
let check = isEven(8);
console.log(check);








// arrow function (ES6)

/* it allows us to write function faster bcz :
   no need to write function keyword
   no need to give () in case of single parameter
   no need to give {} for single line of code
   no need to use return statement if single line code
*/  

let singHappyBirthdayAgain = () => {
    console.log("Happy birthday to you....")
}
singHappyBirthdayAgain();


sumOfThree = (number1, number2, number3) => {
    return number1+number2+number3;
}
console.log(sumOfThree(34,5,77))


// if I have one parameter only, I can also remove the parenthesis...but not valid for more than one parameter
const checkEven = num => {
    return num % 2 === 0;
}


// implicit return
let invitation = name => `Welcome ${name} to this event.`
console.log(invitation("Arnab"))    // Welcome Arnab to this event.

// one more syntax is...
const firstChar = anystring => anystring[0]     // function firstChar(anystring){
                                                //     return anystring[0];
                                                // }

console.log(firstChar("Arnab"));    // A


// in case of implicit return you may use () to wrap the return value but do not use {} otherwise you have to use return keyword.
// then what to do to return an object ??
// ans : wrap the object to be returned inside ()
const returnObject = (userName, age) => ({name : userName, age : age}) 

console.log(returnObject('Arnab',20))           // { name: 'Arnab', age: 20 } 









// IIFE : Immediately Invoked Function Expression
// executed immediately 
// used to avoid pollution in our function from global scope variables or declarations

// simple IIFE 
(function(){
    console.log('It is an IIFE')
})();

// IIFE as a variable
let iife = (function(){return('It is an IIFE')})();    // It is an IIFE
// console.log(iife);                                  // It is an IIFE

// arrow function as IIFE
(()=>{console.log('This is an arrow function IIFE')})();

// parameterised IIFE
(function(name){
    console.log(`${name} has invoked an IIFE that will never run again.`)
})('Arnab');      

// named IIFE 
(function namedIIFE(){
    console.log('It is a named IIFE')
})();










