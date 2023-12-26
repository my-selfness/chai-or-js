
// function sayMyName(){
//     console.log("h");
//     console.log("i");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");
// }

// sayMyName()

function addTwoNumber(number1,number2){
    // let result = number1+number2
    // return result
    return number1+number2
}

const result = addTwoNumber(4,5)
// console.log("Result:",result);

function loginUserMessage(username="Sam"){
    if(!username){
        console.log("Plese enter a username")
        return
    }
    return  `${username} just logged in`
}


// console.log(loginUserMessage());



function calculater(val1,val2,...number1) {
    return number1
}

// console.log(calculater(200,300,100,400));

const user={
    username:"hitesh",
    price:188
}


function handleObj(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
handleObj(user)

const myNewArr = [100,200,300]

function returnSecond(getArr) {
    return getArr[1]
}

console.log(returnSecond(myNewArr));