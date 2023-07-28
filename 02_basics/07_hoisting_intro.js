
// hoisting



console.log(a);     // undefined

var a = 12;

console.log(a);     // 12

/* BTS : the line var a = 12; is converted by js into two lines : var a; a = 12;
         the line var a; is the declaration of the variable a. This declaration is moved to the top and that is called hoisting. In other languages that print statement before declaration statement would give an error
         bcz for them that variable is not defined still. But for js, hoisting occurs and the result comes as undefined. There is a difference between not defined and undefined. Undefined implies existence but no-acquaintence of the value where not defined implies non-existence. So the line assignment of value remains at its place. So any use of that variable before assigning the value i.e before this very line will be treated as an undefined variable. So declaration is hosited at the top of the code.
*/

hello();            // Hello world!  

function hello(){
    console.log("Hello world!");    
}


// Note : not valid for function expression and arrow function

// console.log(addOne(5))              // ReferenceError: Cannot access 'addOne' before initialization
        
const addOne = function(num){
    return num+1
}

console.log(addOne(5))                 // 6 
