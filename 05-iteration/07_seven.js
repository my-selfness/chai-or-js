const num =[1,2,3,4,5,6]


// const newNum = num.map((item)=> item + 10)



const newNum = num.map( item => item*10).map( digit => digit + 1).filter( point => point>30 )

// console.log(newNum);