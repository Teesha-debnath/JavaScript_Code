//2 types of memories - Stack and Heap

//stack (primitive), head (Non-primitive)
// stack gives copy of the variable or data
//heap gives reference

let myName = "TeeshaDebnath"

let anotherName = myName //copy of myName is given to anotherName
anotherName = "Teesha"
console.log(anotherName);
console.log(myName);

//this will go under heap
// userOne has direct reference to the value inside the curly brackets

let userOne = {
    email: "user@123.com",
    Upi: "user@ybl"
}

//we are trying to change the value of usertwo
let usertwo = userOne

usertwo.email = "user@1234.com"
//both the values change because of reference and not copy of the original data
console.log(userOne.email)
console.log(usertwo.email);


