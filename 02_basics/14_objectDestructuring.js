
// object destructuring

const band = {
    bandName:"Fossils",
    famousSong:"dekho manashi"
};

const { bandName, famousSong } = band;
console.log(bandName);
console.log(famousSong);
// same names like key should be the names of the variables

// const {name,song} = band;
// console.log(name);  // undefined
// console.log(song);  // undefined

// but if I want different names 
// const { bandName:var1, famousSong:var2 } = band;  
// console.log(bandName); // bandName is not defined 
// console.log(var1);

const band2 = {
    band2Name:"Fossils",
    famousSong2:"dekho manashi",
    year:2010,
    anotherFS:"hasnuhana"
};
const { band2Name, famousSong2, ...restProps } = band;
console.log(restProps);    // { bandName: 'Fossils', famousSong: 'dekho manashi' }


// objects inside an array : application in real world

// nested destructuring
const users = [
    {userId:1,firstName:"Arnab",gender:"male"},
    {userId:2,firstName:"Saax",gender:"male"},
    {userId:3,firstName:"Polo",gender:"female"},
]
// suppose I want the users individually
const [user1,user2,user3] = users;
console.log(user2);
// I can also use for of loop
// suppose I want firstName of user1 and gender of user3
const [ {firstName:user1FirstName} , , {gender:user3Gender} ] = users;
console.log(user1FirstName);
console.log(user3Gender);



