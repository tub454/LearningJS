
// STRINGS

let myName = 'Arnab Mukherjee';
console.log(myName)
console.log(myName[3])   
console.log(myName[20])  // undefined
console.log(myName.length)
console.log(myName[myName.length-1])

console.log("He\"llo")   // he"llo

let title = 'Mr.';
console.log(title,myName);  // space created automatically

// useful string methods :
let firstName = '    Arnab    '
console.log(firstName.length)  // property, not a method

// firstName.trim()   // method...does nothing with the original one, returns a new string
firstName = firstName.trim()   // Removes leading and trailing whitespaces and line terminator chars from string.
console.log(firstName)
console.log(firstName.length)

let hobbies = '  coding reading running   ';
let result = hobbies.trim();    // trimStart(), trimEnd()
console.log(hobbies);
console.log(result);
console.log(result.length);              // 22
console.log(hobbies.length);             // 27  
console.log(result.indexOf('running'))   // 15   .... akso there is lastIndexOf(substring)
console.log(result.indexOf('Running'))   // -1 ( case sensitivity )
console.log(result.indexOf('ing',5))     // 11
console.log(result.includes('running'))  // true
console.log(result.includes('Running')) 

console.log(firstName.toUpperCase())    // ARNAB
console.log(firstName.toLowerCase())    // arnab
console.log(firstName.indexOf('r'))     // first position

let newString = firstName.slice(0,4)    // Arna
console.log(newString)                  // negative indexing also possible for this method
newString = firstName.slice(1)          // rnab
console.log(newString)


// string concatenation
let string1 = 'Arnab '
let string2 = 'Mukherjee'
let string3 =  string1 + string2    // no space generated, we have to provide it
console.log(string3)


// template string
let age = 20;
let my_name = 'Arnab'
// let aboutMe = 'My name is '+ my_name + ' and my age is ' + age
// console.log(aboutMe)   // My name is Arnab and my age is 20
let aboutMe = `My name is ${my_name} and my age is ${age}`
console.log(aboutMe)      // same output
 

// stringName.split()
let colors = "black,brown,blue,red";
let arrColors = colors.split(',');
console.log(arrColors);              //  [ 'black', 'brown', 'blue', 'red' ]
// let arrColors = colors.split(' ');
// console.log(arrColors)            //  [ 'black,brown,blue,red' ] 

// javascript strings are immutable


// substring
let str = "asghjkrtyui"
console.log(str.substr(4,7))       // jkrtyui
console.log(str.substring(4,7))    // jkr

// replace
let strNew = str.replace('jkr','fyuk')
console.log(strNew)   // asghfyuktyui
