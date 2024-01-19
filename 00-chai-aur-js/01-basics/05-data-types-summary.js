//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// Primitive datatypes are always pass by call by value

const score = 100
console.log(typeof score); // Number
const scoreValue = 100.3
console.log(typeof scoreValue); // Number

const isLoggedIn = false
console.log(typeof isLoggedIn); // Boolean
const outsideTemp = null
console.log(typeof outsideTemp); // Object
let userEmail;
console.log(typeof userEmail); //undefined

const id = Symbol('123')
console.log(typeof id); // Symbol
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n
console.log(typeof bigNumber); // BigInt



// Reference (Non primitive)

// Array, Objects, Functions

// Non Primitive datatypes are pass by call by Reference

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

console.log(typeof heros); //arrays

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction); //function

// https://262.ecma-international.org/5.1/#sec-11.4.3