

// OBJECTS
// 1. arrays are good but not sufficient for real world data
// 2. objects store key value pairs
// 3. objects do not have index
// 4. reference type




// creating object
// 1. using constructor : here a singleton is created
// 2. using object literal : not singleton
const person = {name:"Arnab",age:20};   // keys are also called properties, here name and age are props. of person
const person2 = {
    name:"Sayan",
    age:22,
    hobbies: ["guitar","football","music"],
    "income source":"SDE"       // to have a key with multiple words, use as string or spaces will not be allowed
}
console.log(typeof person);     // object




// accessing data from object
console.log(person.name)        // dot notation
console.log(person2["name"])
console.log(person2["age"])     // bracket notation
console.log(person2["income source"])   // here for such strings dot notations are not applicable

// difference between dot notation and bracket notation while accessing from an object :
let propertyName = 'age';
console.log(person.propertyName)    // undefined
console.log(person[propertyName])   // 20




// adding key-value pair to an object
person.gender = "male";

const key = "email"
// if we want to add a key from this key variable
// person.key = "abc123@gmail.com";
// console.log(person)   // { name: 'Arnab', age: 20, gender: 'male', key: 'abc123@gmail.com' }
// but I want that value of key as the new key i.e email
person[key] = "abc123@gmail.com";
console.log(person)      // { name: 'Arnab', age: 20, gender: 'male', email: 'abc123@gmail.com' }

// ** adding a symbol as a key of an object
const mySym = Symbol('key1')
person.mySym = 'myKey1'
console.log(person.mySym, typeof person.mySym)    // myKey1 string (not given as symbol, not a correct way)
console.log(person)
/*
{
  name: 'Arnab',
  age: 20,
  gender: 'male',
  email: 'abc123@gmail.com',
  mySym: 'myKey1'
}
*/
person2[mySym] = 'myKey1'
console.log(person2[mySym], typeof person2[mySym])  // myKey1 string 
console.log(person2)                                // here you can see the difference 
/*
{
    name: 'Sayan',
    age: 22,
    hobbies: [ 'guitar', 'football', 'music' ],
    'income source': 'SDE',
    [Symbol(key1)]: 'myKey1'
}
*/




// freezing an object 
Object.freeze(person)
person.name = 'Spandan'
console.log(person['name'])    // Arnab (no error, but change is not propagated as we have frozen the person object)
person['grade'] = 9.0
console.log(person)            // no addition of new key




// one key can appear only once, if I declare it more than once then it will store the last value assigned
// const person2 = {
//     name:"Sayan",
//     age:22,
//     hobbies: ["guitar","football","music"],
//     "income source":"SDE",     
//     age = 20     // age will be overwritten as 20
// }      



// a lil bit about method 
// a method is an object property(key) holding a function as value
const human = {
    birthYear : 2003,
    ageCalculate : function(birthYear, currentYear = 2023){
        let age = currentYear-birthYear;
        return age;
    }
}
console.log(human)
console.log(human.ageCalculate)                       // [Function: ageCalculate]
console.log(human.ageCalculate())                     // NaN
console.log(typeof human.ageCalculate())              // number                
console.log(typeof human.ageCalculate)                // function 
console.log(human.ageCalculate(human.birthYear))      // 20 




