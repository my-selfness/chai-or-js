const name ="hitesh"
const repoCount = 50

// console.log(name+repoCount)
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Modern way

const gameName= new String('Hitesh-ji')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newStr = gameName.substring(0,4)
// console.log(newStr)
const newString = gameName.slice(-8,4)
// console.log(newString)

const NewStr1= "        hitsh        "
// console.log(NewStr1);
// console.log(NewStr1.trim());

const url= "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(gameName.split('-'))