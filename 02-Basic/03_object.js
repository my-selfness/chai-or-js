// singleton 

// object leterals


const mySym= Symbol("key1")
const jsUser = {
    name:"Hitesh",
    [mySym]:"myKey1",
    age:30,
    location:"jaipur",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["mon","tue"]
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

// jsUser.email="hitesh@google.com"
// Object.freeze(jsUser) //lock to not change 
// jsUser.email="hitesh@tantra.com"

// console.log(jsUser);


jsUser.greeting=function(){
    console.log("hello jsUser");
}

console.log(jsUser.greeting())