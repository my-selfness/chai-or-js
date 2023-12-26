

if (true){
    let a = 23
    const b=34
    var c=12
}

// console.log(c);

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtbe"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()


addOne(5) //run without any error
function addOne(num){
    return num +1
}

// addTwo(5)  //gives error
const addTwo= function(num){
    return num+2
}

addTwo(5) //right