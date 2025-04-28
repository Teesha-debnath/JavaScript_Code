const name = "teesha"
const repoCount = 9

console.log(name+repoCount)//teesha9

//modern readable syntax - String interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way of declaration
//using object - wont work in console undefined output
const gameName = new String('Teesha-TD-com')

console.log(gameName[0]);//T
//prototype
console.log((gameName.__proto__));//{}

//methods - orinal values dont change 
console.log(gameName.length)//8
console.log(gameName.toUpperCase());//TEESHATD
console.log(gameName.charAt(2));//e
console.log(gameName.indexOf('s'));//3

//substring method
const newString = gameName.substring(0, 4)
console.log(newString)//Tees

//slice method
const anotherString = gameName.slice(-7, 4)//can take negative values
console.log(anotherString);

//trim method
const newStringOne = "   Teesha    ";
console.log(newStringOne)//gives original data as output
console.log(newStringOne.trim())//trims the spaces

//replace method
const url = "https://teesha.com/teesha%20d"
console.log(url.replace('%20', '-'))// returns https://teesha.com/teesha-d

console.log(url.includes('teesha'));//true

console.log(url.includes('td'))//false

//suppose i want to change the name separated with - into separate arrays 
console.log(gameName.split('-'));//['Teesha', 'TD', 'com']





