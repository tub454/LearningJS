

// Functions :
//      1. when we want to run a code but not immediately
//      2. when we want to reuse our code
//      3. when we want to run same code with different data every time



// function definition
function sayName(){
    console.log('Arnab')
}
// sayName is the reference
console.log(sayName)           // [Function: sayName]
// function call 
sayName()                      // Arnab




// here number1 and number2 are the parameters (that we give while defining the function)
function sumOfTwo(number1, number2){
    console.log(number1+number2);
}
console.log(sumOfTwo(5,9));    // 14
// here 5 and 9 are the arguments (that we give while calling the function)
sumOfTwo()                     // NaN  (bcz undefined + undefined == null)
sumOfTwo(3,'4')                // 34
sumOfTwo(3,'a')                // 3a
sumOfTwo(3,null)               // 3 
sumOfTwo(3)                    // NaN




// returning a value
function add(num1,num2){
    // let sum = num1+num2; 
    // return sum;
    return num1+num2;          
}
let sum = add(10,20)           // this sum variable is outside the add() function scope, therefore no conflict 
console.log(sum)               // 30

function sumOfThree(number1, number2, number3){
    return number1+number2+number3;
}
console.log(sumOfThree(2,4));  // NaN

function loginMessage(userName){
    if(userName===undefined){
        console.log('Please enter an username')
        return
    }
    return `${userName} just loggen in`
}
console.log(loginMessage('Arnab'))   // Arnab just loggen in
console.log(loginMessage(""))        //  just loggen in
console.log(loginMessage())          // Please enter an username
                                     // undefined



 
// default value of parameter :
let pow = function(base, ind = 0){
    return base**ind;
}   

// let pow(base, ind){
//     if(typeof ind === 'undefined') ind = 0; 
//     return base**ind;
// }
console.log(pow(2,3));   // 8
console.log(pow(10));    // 1




// Rest parameters :

function calculateCartPrice(...prices){
    let total = 0;
    for(let price of prices) total+=price;
    return total;
}

function addNums(a,b,...c){
    console.log(`${a}`)         
    console.log(`${b}`)         
    console.log(`${c}`)        
    console.log(c)              
    console.log(typeof(c))      
}
addNums(3,5,2,6,7);
/*
3
5
2,6,7
[ 2, 6, 7 ]
object
*/

function addAll(...numbers){
    let total = 0;
    for(let num of numbers) total+=num;
    return total;
}
let sumAll = addAll(1,2,3,4,5,6);
console.log(sumAll);   // 21




// passing objects and arrays as argument

const user = {
    userName : 'asfgh',
    price : 6678
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}

handleObject(user)

// you can also pass an object directly
handleObject({
    userName : 'kgfd',
    price : 8765
})


const arr = [23,5,6,77]

function handleArray(anyArray){
    console.log(anyArray[1])
}

handleArray(arr)

handleArray([76,55,98,9])



