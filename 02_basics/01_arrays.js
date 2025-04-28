//array-basics
//collection of multiple items in a single variable

//declaration type1
const myArr = [0, 1, 2 ,3 ,4 ,5]

//array can't be accessed using arbitrary strings
//can be accessed through
// console.log(myArr[0]);//0
//in Javascript on array when copy operation is performed creates SHALLOW COPIES


//Shallow Copy
//A shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made

//Deep copy- dont share same reference

//declaration type2
const myHeros = ["spiderman", "batman"]

//declaration type3
const myArr2 = new Array(1, 2, 3, 4)

//array - methods
//push
// myArr.push(6);
// myArr.push(7);

//pop
// myArr.pop()//removes last element
// console.log(myArr);//added to the array

//unshift
// myArr.unshift(9)//gets inserted in the begining of the array
// console.log(myArr)

//shift
// myArr.shift(9)

//includes
// console.log(myArr.includes(9));
//indexOf
// console.log(myArr.indexOf(9));
//join changes to string
// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// //slice, splice

// console.log("A", myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B", myArr);

// console.log("A", myArr);
// const myn2 = myArr.splice(1, 3);
// console.log("C", myArr);
// console.log(myn2);

