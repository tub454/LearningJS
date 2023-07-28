

// this refers to the current context

const user = {
    userName : 'Arnab',
    userId : 987,
    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to our website.`)
        console.log(this)
    } 
}

user.welcomeMessage()       // Arnab, welcome to our website.
                            //    {
                            //        userName: 'Arnab',
                            //        userId: 987,
                            //        welcomeMessage: [Function: welcomeMessage]
                            //    } 
user.userName = 'Majnu'
user.welcomeMessage()       // Majnu, welcome to our website.
                            //    {
                            //        userName: 'Majnu',
                            //        userId: 987,
                            //        welcomeMessage: [Function: welcomeMessage]
                            //    } 

console.log(this)           // {}

// Note : In node environment, global context is an empty object. Inside browser, the global context is window object.



// let's see this for a function
function inspect(){
    let something = 'asdfghj'
    console.log(this.something)
    console.log(this)
}
inspect()     // undefined
              // <ref *1> Object [global] {....}

// for function expression
let funExp = function(){
    let something = "kjhgf"
    console.log(this.something)
    console.log(this)
}
funExp()      // undefined
              // <ref *1> Object [global] {....} 

// watch what happens in case of arrow function
let funArrow = () => {
    let something = 'ertyui'
    console.log(this.something)
    console.log(this)
}         
funArrow()    // undefined
              // {} 
// Note : In the tutorials or blogs out there on internet, you will read that we can not use 'this' in an arrow function. The above example is the actual meaning of this statement.               
              