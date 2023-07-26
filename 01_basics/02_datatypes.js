
"use strict"  // treat all js code as newer version

let age = 20
let firstName = 'Arnab'
console.log(typeof(age))        // number
console.log(typeof firstName)   // string

/*
Primitive Types
   In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types:
     string
     number
     bigint
     boolean
     undefined
     Symbol
     null
*/

let a;
console.log(typeof a)     // undefined   

let b = null
console.log(typeof b)     // object
// this is a bug, an error, but not changed intentionally

// BigInt
let myNum;
console.log(Number.MAX_SAFE_INTEGER)  // 9007199254740991
myNum = 12345678987654210
// Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
console.log(myNum)  // 12345678987654210      
myNum = BigInt(12345678987654210)
console.log(myNum)  // 12345678987654210n
myNum = 123n
let myNum2 = 123
console.log(typeof myNum)    // bigint
console.log(typeof myNum2)   // number


// symbol
// symbol is used to maintain the uniqueness
let id = Symbol('123')
let id2 = Symbol('123')
console.log(id===id2)       // false
console.log(typeof id)      // symbol