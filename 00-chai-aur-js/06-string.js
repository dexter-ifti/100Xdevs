/**
 * DOCS 
 * LINK 1- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * LINK 2 - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods     
 `
 */

const string = "dexter";
const stringTwo = "ifti";

// YE h aam aur purni jindagi
console.log(string + stringTwo );

console.log(`Name is ${string.toUpperCase()} ${stringTwo}`);  

// another way of declaring string 
const gameName = new String('dexter-ifti');

const cl = console.log;

cl(gameName[0]);

cl(gameName.__proto__);

const newString = gameName.substring(0,4);
cl(newString);

const newStringTwo = gameName.slice(0,4);
cl(newStringTwo);
// here is one benefit of slice() that we can use negative index 
// on negative index it traverse from back
cl(gameName.slice(-10, 4));

const anotherString = "             dexter              ";
cl(anotherString);
cl(anotherString.trim());
// there are more trim methods like trimEnd() and trimStart()

let url = "https://dexter.com/dexter%20ifti"
url = url.replace("%20", "-");
cl(url);

cl(url.includes("dexter"));
cl(url.includes("100x"));

cl(gameName.split('-'));
