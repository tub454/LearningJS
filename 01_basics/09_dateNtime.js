
// Date

let myDate = new Date()
console.log(myDate)                       // 2023-07-26T15:37:31.325Z
console.log(myDate.toString())            // Wed Jul 26 2023 21:07:31 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())        // Wed Jul 26 2023 
console.log(myDate.toJSON())              // 2023-07-26T15:37:31.325Z
console.log(myDate.toLocaleString())      // 26/7/2023, 9:07:31 pm
console.log(myDate.toLocaleDateString())  // 26/7/2023

let newDate = new Date(25,0,2023)
console.log(newDate.toString())     // Wed Jul 16 1930 00:00:00 GMT+0530 (India Standard Time)
// month starts from 0
newDate = new Date(25,0,2023,5,3)
console.log(newDate.toString())     // Wed Jul 16 1930 05:03:00 GMT+0530 (India Standard Time)

let createdDate = new Date('01-14-2023')       // here month starts from 01  
let createdDate2 = new Date('2023-01-14')  
console.log(createdDate.toLocaleString())      // 14/1/2023, 12:00:00 am
console.log(createdDate2.toLocaleString())     // 14/1/2023, 5:30:00 am 

let myTimeStamp = Date.now()
console.log(myTimeStamp)        // 1690386559243   (total milliseconds from 01-01-1970)

console.log(myDate.getTime())   // 1690386559227    (kam kiyu aa rha hain bc !)

console.log(myDate.getMonth())  // 6 (July) 
console.log(myDate.getDay())    // 3 (Wednesday)

// customizing date output
console.log(myDate.toLocaleString('default',{      // Wednesday
    weekday:"long"
}))











