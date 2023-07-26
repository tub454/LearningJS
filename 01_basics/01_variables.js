const userID = 34567
let email = 'abc@xyz.com'
var password = '123456'
userLocation = 'Kolkata'

// userID = 96857            // TypeError: Assignment to constant variable.
// re assignment not allowed to constant variable
email = 'xyz@abc.com'
password = '345678'
userLocation = 'Bengaluru'

/*
1. scope of var is functional scope, that of let and const is block scope.
2.  var can be updated and redeclared inside its scope, let can be updated in its scope but not be redeclared there. 
   const can neither be updated nor redeclared in its scope.
3. var and let can be declared without initialization but const can not be declared without initialization. 
4. var can be accessed before initialization but let can not be (ReferenceError given).   
5. for var variable, hoisting is done with initializing as default value. for let and const hoisting is done but not initialized.
*/

console.log(userID)          // 34567
console.table([userID,email,password,userLocation])



// Rules for naming variables :
// can not start with a number
// you can use only underscore_ or dollar$ symbol
// _firstName, $firstname, first$name...all valid
// can not give space in between
// camelcase is convention
// first_name ( snake casing )

