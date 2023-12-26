
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


console.log(loginUserMessage());