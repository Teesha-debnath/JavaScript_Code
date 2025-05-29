// const tinderuser = new Object() --Singleton
const tinderuser = {} //this is also same --Non-singleton

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Teesha",
            lastname: "Debnath"
        }
    }
}

//how to access the nested objects?
console.log(regularUser.fullname?.userfullname.firstname) //Teesha
// "?" used incase full name doesnt exist it wont give error

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// combining objects
// const obj3 = {obj1, obj2}
// console.log(obj3) //object inside object

// different way of combining
// const obj3 = Object.assign({}, obj1, obj2) //static method to combine objects

const obj3 = {...obj1, ...obj2} // Spread and combine MOST USED
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "t@gmail,com"
    },
    {
        id: 2,
        email: "d@gmail,com"
    }
]

// users[1].email
// console.log(tinderuser)
// console.log(Object.keys(tinderuser)); //datatype array can be used in loops
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser)); //used less

// //what if value doesnt exits?
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));
// console.log(tinderuser.hasOwnProperty('isLogged'));



//    --- Destructuring objects --- 
const course = {
    coursename: "Javascript",
    price: "999",
    courseinstructor: "hitesh sir"
}
//course.courseinstructor

const {courseinstructor: instructor} = course
console.log(instructor); //hitesh sir

//react - destructuring
// const navbar = ({company}) => {

// }

// navbar(company = "Nothing")

//JSON API
//object format
// {
//     "name": "Teesha",
//     "coursename": "javascript",
//     "price": "free"
// }

// array format
// [
//     {},
//     {},
//     {}
// ]