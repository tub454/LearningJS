

// let fruits = ["apple","mango","grape"];
let fruits = new Array("apple","mango","grape")
console.log(fruits.length);   // 3
console.log(fruits[1]);  // mango

fruits[1] = "banana"
console.log(fruits[1]);  // banana

let mixed = [1,2,2.3,"Arnab",null,undefined]
console.log(mixed)      // [1, 2, 2.3, 'Arnab', null, undefined]

console.log(typeof fruits)  // object
// array is an object in javascript

let obj = {};               // object literal
console.log(typeof obj)     // object




// How can I know if the given object is array or not ??
console.log(Array.isArray(fruits))  // true
console.log(Array.isArray(obj))     // false




// array methods --

// push
fruits.push("mango");
console.log(fruits)

// pop
fruits.pop()    // it pops the last element and also returns it
console.log(fruits)
var lastFruit = fruits.pop();
console.log(lastFruit)

// unshift
fruits.unshift("orange")
console.log(fruits)         // [ 'orange', 'apple', 'banana' ]

// shift
var firstFruit = fruits.shift()
console.log(fruits)         // [ 'apple', 'banana' ]
console.log(firstFruit)     // orange

// join
// Adds all the elements of an array into a string, separated by the specified separator string.
console.log(fruits.join(''))   // applebanana
console.log(fruits.join('-'))  // apple-banana

// splice 
// splice(start_index, delete_count, items_to_insert)
let a1 = ['a','b','c','d']
console.log(a1.slice(1,3))      // [ 'b', 'c' ]
// splice() method returns an array of the deleted items
console.log(a1.splice(1,3))     // [ 'b', 'c', 'd' ]  
console.log(a1)                 // ['a']
console.log(a1.splice(0,0,'e','f','g'))   // []
console.log(a1)                 // [ 'e', 'f', 'g', 'a' ]

// indexOf :
console.log(a1.indexOf('a'))    // 3
console.log(a1.indexOf('x'))    // -1

// includes :
console.log(a1.includes('f'))   // true
console.log(a1.includes('y'))   // false


/*
note 1 : push and pop are faster than shift and unshift

note 2 : splice() manipulates the original array. This is the difference between splice() and slice()
*/




// ways to empty an array
let a2 = ['a','b','c','d']
a2 = [];
// a2 = 0;