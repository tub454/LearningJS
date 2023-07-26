

// Numbers -

let num = 400
console.log(num, typeof num)

let num2 = new Number(400)
console.log(num2)
console.log(typeof num2)
console.log(num2.toString(), typeof num2.toString())
console.log(num2.toFixed(2))

let f = 123.896
console.log(f.toPrecision(4), typeof f.toPrecision(4))
console.log(f.toPrecision(3))
f = 1123.896
console.log(f.toPrecision(3))     // 1.12e+3

let hundreds = 1000000
console.log(hundreds.toLocaleString())           // 10,00,000
console.log(hundreds.toLocaleString('en-US'))    // 1,000,000  

console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.EPSILON)
console.log(Number.POSITIVE_INFINITY)   // Infinity




// Mathematics -

console.log(Math)                    // Object [Math] {}
console.log(Math.abs(-4))            // 4
console.log(Math.round(4.3))         // 4 
console.log(Math.round(4.5))         // 5 
console.log(Math.floor(4.8))         // 4
console.log(Math.ceil(4.8))          // 5
console.log(Math.min(2,4,6,7,0))     // 0  
console.log(Math.pow(2,5))           // 32
console.log(Math.random())           // 0.40154162682205974 (always lies between 0 and 1)

// a generic formula to get a random number in the range (max,min)
const max = 20, min = 10;
let randomNum = Math.floor(Math.random()*(max-min+1)) + min 
console.log(randomNum)

