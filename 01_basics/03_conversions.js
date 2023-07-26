
let score = 33
console.log(typeof(score))           // number

let score2 = '33'
console.log(typeof(score2))          // string 
                                 
let valInNum2 = Number(score2)
console.log(typeof valInNum2)        // number 

let score3 = '33abc'
let valInNum3 = Number(score3)       
console.log(typeof valInNum3)        // number
console.log(valInNum3)               // NaN

let score4 = null
let valInNum4 = Number(score4)
console.log(typeof valInNum4)        // number   
console.log(valInNum4)               // 0

let score5 = undefined 
let valInNum5 = Number(score5)
console.log(typeof valInNum5)        // number
console.log(valInNum5)               // NaN

let score6 = true
let valInNum6 = Number(score6)
console.log(typeof valInNum6)        // number
console.log(valInNum6)               // 1


// truthy and falsy values
let str = 'arnab'
let strBool = Boolean(str)
console.log(strBool, typeof strBool)     // true boolean
/*
falsy values are :
false
null 
undefined
""
0
*/


console.log(5+"2")     // 52
console.log("5"+"2")   // 52
console.log(5-"2")     // 3
console.log(5*"2")     // 10
console.log(5*"yes")   // NaN 



// convert number to string
// app1:
let age = 20
age = age + ""
console.log(typeof(age))         // NaN 
// app2:
myAge = 20;
myAge = String(myAge)
console.log(typeof myAge)        // string

// convert string to number
// app1:
let myStr = "34"
// myStr = +myStr
console.log(typeof +myStr)       // number
// app2:
Str = "123456789"
Str = Number(Str)                // constructor concept, written in block letter
console.log(typeof Str)          // number

let num = 5;
num*=2;
let result = num*2-2+3-(8/4)%2;        // 21
console.log("My result is "+result);   // result converted into string
console.log(typeof(result));           // number


console.log('1'+2)         // 12
console.log(1+'2')         // 12
console.log('1'+'2')       // 12
console.log('1'+3+2)       // 132
console.log(1+3+'2')       // 42
console.log(1+'3'+'2')     // 132 

console.log(+true)  // 1
console.log(+"")    // 0










