
/*
In JavaScript, scope refers to the visibility of a variable or how it can be used after it is declared. The scope of a variable depends on the keyword that was used to declare it.
The three types of Scope are Global Scope, Function Scope, and Block Scope. Before ES6 (2015), JavaScript had only Global Scope and Function Scope with the var keyword. ES6 introduced let and const which allow Block Scope in JavaScript.
Global Scope: Variables declared outside any function or curly braces '{}' have Global Scope, and can be accessed from anywhere within the same Javascript code. var, let and const all provide this Scope.
Function Scope: Variables declared within a function can only be used within that same function. Outside that function, they are undefined. var, let and const all provide this Scope.
Block Scope: A block is any part of JavaScript code bounded by '{}'. Variables declared within a block can not be accessed outside that block. This Scope is only provided by the let and const keywords. If you declare a variable within a block using the var keyword, it will NOT have Block Scope.
*/


var a = 10
let b = 20         
const c = 30

{
    var a = 15
    let b = 25
    const c = 35
}

console.log(a)      // 15
console.log(b)      // 20
console.log(c)      // 30





// global scope vs block scope vs function scope

//block1
{
    let firstName = "Arnab"
    let num = 10;
    console.log(num)
}

//console.log(firstName)   // ReferenceError: firstName is not defined

//block2
{
    let firstName = "Spandan"
    let num = 100;
    console.log(firstName) 
    console.log(num)
}

// same for const keyword

// but var has function scope
{
    var msg = 'Hii'
    console.log(msg)       // Hii
}
console.log(msg)           // Hii
{
    console.log(msg)       // Hii 
    var msg = 'humm'
    console.log(msg)       // humm
}




// function inside function (we will see it later)
function one(){
    const userName = 'Arnab'
    function two(){
        const website = 'github'
        console.log(userName)
    }
    // console.log(website)     // ReferenceError: website is not defined
    two()
}

one()

// two()                        // ReferenceError: two is not defined 
