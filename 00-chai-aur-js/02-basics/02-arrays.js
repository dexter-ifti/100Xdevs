const cl = console.log;
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["sperman", "flash", "batman"];

// marvel_heros.push(dc_heros); // this will create array of array

cl(marvel_heros);
// cl(marvel_heros[3][1]);

// here vis the solution 
// 1. concat() but outdated and support only two arrays
const all_heros = marvel_heros.concat(dc_heros);
cl(all_heros);

// 2. Spread Operator✨💎
const all_new_heros = [...marvel_heros, ...dc_heros];
cl(all_new_heros);

const anotherArray = [1,2,3,4,[5,6,7], 8,[9,0,55]];
const real_another_array = anotherArray.flat(Infinity);
cl(real_another_array);

cl(Array.isArray("dexter"));
cl(Array.from("dexter"));
cl(Array.from({name : "dexter"})); //failed , returns {}

let score1 = 100;
let score2 = 200;
let score3 = 300;

cl(Array.of(score1, score2, score3));