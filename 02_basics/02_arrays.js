const marvel = ["spiderman", "thor", "ironman"]
const dc = ["flash", "batman", "superman"]

//array inside array - problem
// marvel.push(dc);
// console.log(marvel);//[ 'spiderman', 'thor', 'ironman', [ 'flash', 'batman', 'superman' ] ]
// console.log(marvel[3][1]);//[ 'flash', 'batman', 'superman' ]

// const allHeros = marvel.concat(dc);
// console.log(allHeros);

// //spread- more than 2 values can be added
// const all_new_heros = [...marvel, ...dc]
// console.log(all_new_heros);//[ 'spiderman', 'thor', 'ironman', 'flash', 'batman', 'superman' ]

// const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

//suppose data scrapped is in different data type- like string or object but we want in array 
console.log(Array.isArray("Teesha"))
console.log(Array.from("Teesha"))
console.log(Array.from({name: "Teesha"}))//[] need to mention array of keys or values or what

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))