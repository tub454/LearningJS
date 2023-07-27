

const user = new Object()
console.log(user)              // {}

const user2 = {} 
console.log(user2)             // {}

// ** the only difference is user is a singleton object, user2 is not.




// nesting can be done i.e. there can be an object as a key
const fbUser = {
    age : 20,
    fullName : {
        userName : {
            firstName : 'Arnab',
            lastName : 'Mukherjee'
        }
    }
}
console.log(fbUser.fullName.userName.lastName)   // Mukherjee
// ** here a thing comes named optional chaining (we will explore it later on)




// combining more than one objects

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3 = {obj1,obj2}         // incorrect way, the argument objects will be stored as keys 
console.log(obj3)                // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// approach-1 : 
// const obj4 = Object.assign(obj1,obj2)
// console.log(obj4)             // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
/* 
   but here is a problem in this syntax. 
   The syntax according to the documentation is - Object.assign(target, source)
   The returned object is equal to target. So, if we do not want to change the obj1, we should do -
*/   
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)                // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 
console.log(obj1)                // { '1': 'a', '2': 'b' }

// approach-2 :
const obj5 = {...obj1,...obj2}
console.log(obj5)                // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }




// more on objects...
console.log(Object.keys(obj5))          // [ '1', '2', '3', '4' ]
console.log(Object.values(obj5))        // [ 'a', 'b', 'c', 'd' ]
console.log(Object.entries(obj5))       // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]
console.log(obj5.hasOwnProperty('2'))   // true
console.log(obj5.hasOwnProperty(2))     // true





// computed properties
const key1 = "prop1";
const key2 = "prop2";
const val1 = "value1";
const val2 = "value2";

// app1:
const o1 = {};       // blank object till now
o1[key1] = val1;
obj1[key2] = val2;

console.log(o1);    // { prop1: 'value1', prop2: 'value2' }

// app2:
const o2 = {
    [key1]:val1,
    [key2]:val2
}

console.log(o2)    // { prop1: 'value1', prop2: 'value2' }

// deletion of a property 
let returnValue = delete o2.key1;
console.log(o2.key1,returnValue)  // undefined true




