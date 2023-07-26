
// joining two arrays

let arr1 = ['a','b','c']
let arr2 = ['d','e','f']
console.log(arr1.push(arr2))         // 4
console.log(arr1)                    // [ 'a', 'b', 'c', [ 'd', 'e', 'f' ] ]
console.log(arr2)                    // [ 'd', 'e', 'f' ]

// approach-1 : using concat()
arr1 = ['a','b','c']
console.log(arr1.concat(arr2))       // [ 'a', 'b', 'c', 'd', 'e', 'f' ] 
// store this in a new array
console.log(arr1)                    // [ 'a', 'b', 'c' ]
console.log(arr2)                    // [ 'd', 'e', 'f' ]

// approach-2 : using spread operator 
let A = ['a','b','c']
let B = ['d','e','f']
let C = [...A, ...B]
console.log(A)                       // [ 'a', 'b', 'c' ] 
console.log(B)                       // [ 'd', 'e', 'f' ]
console.log(C)                       // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
/*
note 1 : limitation of concat() is we can just concatenate two arrays at once. But we can join more than 2 arrays and even items
         using spread operator.
note 2 : push() method return the length and can not join two arrays, pushes the argument array into the calling array.
*/




// flat()
let myArr = [1,2,3,[4,5],6,[8,9,[7,10]]]
console.log(myArr.flat(Infinity))               // [ 1, 2, 3, 4, 5, 6, 8, 9, 7, 10 ]
console.log(myArr)                              // [ 1, 2, 3, [ 4, 5 ], 6, [ 8, 9, [ 7, 10 ] ] ]
// note : give the flattening depth as the argument




// cloning array

// app1: ( fastest )
let array1 = [10,20,30,40,50];
let array2 = array1.slice(0);
console.log(array1)             // [10,20,30,40,50]
console.log(array2)             // [10,20,30,40,50] 
console.log(array1===array2)    // false
array1.push(60)
console.log(array1)             // [10,20,30,40,50,60]
console.log(array2)             // [10,20,30,40,50]

// app2:
let array3 = [].concat(array2);
array2.push(100);
console.log(array2)             // [10,20,30,40,50,100]
console.log(array3)             // [10,20,30,40,50]

// app3:
let array4 = [...array3];       // spread operator
array3.push(70);
console.log(array3)             // [10,20,30,40,50,70]
console.log(array4)             // [10,20,30,40,50]





// let array5 = array4.slice(0).concat([200,300]);    // [10,20,30,40,50,200,300]
// let array5 = [].concat(array4,[200,300])           // same output
let array5 = [...array4,200,300];                     // same output 
console.log(array5)
let array6 = [...array4,...array5];  




// use const for creating array
const a = ['a','b']
a.push('c')
console.log(a)  // ['a','b','c']....no error given bcz address is unchanged, any array method can be applied
// a = ['d','e']   // error given...assignment to constant variable
// use const while creating a reference type





// array destructuring
const my_arr = ["val1","val2","val3"];
let [myVar1, myVar2, myVar3] = my_arr;       // if used const, then later we could not change myVar1, myVar2, myVar3
console.log(myVar1);                         // if myVar3 not declared, no problem, first two for myVar1 and myVar2
console.log(myVar2);                         // if number of declaration > length, last few will be undefined   
console.log(myVar3);                         // if want to skip index, use comma [myVar1, , myVar2] : myVar2 == "value3"

const my_arr2 = ["A","B","C","D","E"];
let [var1, var2, ...myNewArr] = my_arr2;
console.log(var1,var2);  // A B
console.log(myNewArr);   // [ 'C', 'D', 'E' ]



