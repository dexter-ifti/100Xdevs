/*
The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

Syntax
for (variable of iterable) {
  // code block to be executed
}
*/

const arr = [1,3,4,5,6,7];

for (const num of arr) {
    console.log(num);   
}
// 1,3,4,5,6,7

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(greet);
}
// H e l l o  W o r l d

// Map 

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'America')
map.set('Fr', 'France');
map.set('IN', 'India'); // map consist of only unique values
// it automatically remove duplicates

console.log(map);
// Map(3) { 'IN' => 'India', 'USA' => 'America', 'Fr' => 'France' }

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// IN :- India
// USA :- America
// Fr :- France

// for-of loop doesn't work for Objects

// const myObj = {
//     game1 : 'NFS',
//     game2 : 'HALO'
// }

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }