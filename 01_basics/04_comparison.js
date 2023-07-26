
let num1 = 5, num2 = 7;
console.log(num1>num2)  // false

console.log('2'>1)      // true 
console.log('02'>1)     // true

console.log(null>0)     // false
console.log(null==0)    // false
console.log(null>=0)    // true       confusing !!
/*
equailty check == and other comparison operators work differently. Comparisons convert null to a number 0.
*/

// while comparing with undefined, all are false
console.log(undefined == 0)
console.log(undefined >= 0)
console.log(undefined > 0)


// loose and strict equality check ( == and === )
num1 = '7'
console.log(num1==num2)     // true
console.log(num1===num2)    // false


