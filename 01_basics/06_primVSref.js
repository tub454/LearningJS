
// the datatypes of JS can be broadly categorized into two types : primitive and reference datatypes


// primitive vs reference datatype

// Primitive : number, string, undefined, null, boolean
// Reference : (), {}, []

// a value that can not be copied directly, rather the reference of tha original value gets passed as a     reference, is known as the reference value. On the other hand, the value that gets copioed actually is known as primitive value.

// primitive type 
let num1 = 6;
let num2 = num1;
console.log(num1)   // 6
console.log(num2)   // 6
num1++;
console.log(num1)   // 7
console.log(num2)   // 6

// stored in stack, memory obtained by each variable, change in one does not affect another


// reference type : array
let arr1 = ["item1","item2"];
let arr2 = arr1;
console.log(arr1);  // [ 'item1', 'item2' ]
console.log(arr2);  // [ 'item1', 'item2' ]
arr1.push("item3");
console.log(arr1);  // [ 'item1', 'item2', 'item3' ]
console.log(arr2);  // [ 'item1', 'item2', 'item3' ]

// arr1 gets stored in heap memory, a pointer to arr1 will be stored in stack. Then a new pointer to arr2 gets      stored and address of arr1 is stored in it. There is only one array inside heap memory, the arr1.


