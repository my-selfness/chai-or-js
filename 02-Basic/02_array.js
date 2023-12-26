const marvalHeros = ["thor","ironman","spiderman"]
const dcHeros = ["superman","flash","batman"]

// marvalHeros.push(dcHeros)
// console.log(marvalHeros);
// const allheros=marvalHeros.concat(dcHeros)
// console.log(allheros);

const newAll = [...marvalHeros,...dcHeros]

// console.log(newAll);

const anotherArr = [1,2,3,4,5,6,7,8,9,[10,11,12,[110,111,112]]]

const realArr=anotherArr.flat(Infinity)
// console.log(realArr);



// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name:"Hitesh"})); //interesting output

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));