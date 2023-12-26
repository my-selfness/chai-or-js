// const tinderUser = new Object() //singletan 
const tinderUser = {}
tinderUser.id="12ab"
tinderUser.name="Samy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email:"user@googele.com",
    fullname:{
        userfullName:{
            firstName:"hitesh",
            lastName:"chaudhary",
        }
    }
}

// console.log(regularUser.fullname.userfullName.firstName);

const obj1 = {a:1,b:2}
const obj2 = {c:1,d:2}

// const obj3=Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        id:1,
        email:"hello@gmail.com"
    }
]

// console.log(user[0].email);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    courseName:"js in Hindi",
    price:"999",
    courseInstructer:"hitesh"
}

// course.courseInstructer

const {courseInstructer:teacher}=course

console.log(teacher);

// {
//     "name":"hitesh",
//     "courseName":"js",
//     "price":"free"
// }



