// const score = 400//400
 
// const balance = new Number(100)
// console.log(balance);//[Number: 100] 

// console.log(balance.toString);//[Function: tostring]
// console.log(balance.toString().length);//3
// console.log(balance.toFixed(2));//100.00 fixes after decimal 


// const otherNumber = 23.8966//priority given to value before decimal
// console.log(otherNumber.toPrecision(3));//23.9

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());//1,000,000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000

// //+++++++++++++Maths+++++++++++++++
// console.log(Math); //alot of prototypes available

//most importants are 
// console.log(Math.abs(-4));//4

// console.log(Math.round(4.5));//5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.3));//4

// console.log(Math.min(2, 4, 5, 6))//2

// console.log(Math.max(2, 4, 5, 6))//6

//Math.random - most important
// console.log(Math.random());//value ranges between 0-1
// console.log(Math.random()*10);//shifts to second value

// console.log((Math.random()*10) + 1);//to avoid nnums like 0.041
// console.log(Math.floor(Math.random()*10) + 1);//to get floor value like 8

//for cases like in ludo games where number should range between 1-6
// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1)) + min)