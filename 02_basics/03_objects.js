//objects - singleton if declared through constraints 
// not singleton if declared through literals

//symbol
const mySymbol = Symbol("key1")
const JsUser = {
    name: "Teesha",
    //key: value
    "fullname": "Teesha Debnath",//cants be accessed through type1
    mySymbol: "myKey1", //wrong syntax
    [mySymbol]: "myKey1", //right syntax
    age: 21,
    location: "West Bengal",
    email: "1234@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//type1
console.log(JsUser.email); //1234@google.com
//type2
console.log(JsUser["email"]); //1234@google.com
console.log(JsUser["fullname"])//Teesha Debnath

//accesing the symbol --    Wrong Way
console.log(JsUser.mySymbol); //mykey1 gives output but wrong way
// this is not being considered as symbol
console.log(typeof JsUser.mySymbol)//string

//Accessing the symbol --   Right Way -- correct syntax
console.log(JsUser["mySymbol"]);//myKey1
console.log(typeof JsUser[mySymbol]);//string


//basics of object

// 1. changing object value
JsUser.email = "teesha@gmail.com"
console.log(JsUser["email"]);

// 2. Freezing object value that wont change
JsUser.age = 20;
Object.freeze(JsUser)
JsUser.age = 30;//age wont change
console.log(JsUser["age"]);

console.log(JsUser);

//3. Adding function to object
JsUser.greeting = function(){
    console.log("hello js user");
}
//function is executed but not returned back
console.log(JsUser.greeting);// [Function (anonymous)]
//function is executed and gives output
console.log(JsUser.greeting()); //hello js user

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.fullname}`);
}
console.log(JsUser.greetingTwo());// Hello js user, Teesha Debnath
