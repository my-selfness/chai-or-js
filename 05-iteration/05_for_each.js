const arr =["py","cpp","js"]


// arr.forEach(element => {
//    console.log(element); 
// });

const num =[1,2,3,4,5,6]

const newNum = num.filter( (item) => item > 1)

// console.log(newNum);

const myNum = []
num.forEach(item=>{
    if(item>2){
        myNum.push(item)
    }
})

console.log(myNum);