const cl = console.log;

cl(Math); //Object [Math] {}

cl(Math.abs(-4)); // 4

cl(Math.abs(4)); // 4

cl(Math.max(1,2,3,4,5,65,6,7,7)); //65

cl(Math.min(2,3,4,4,5,66)); //2

cl(Math.round(4.4)); // 4

cl(Math.round(4.7)); // 5

cl(Math.ceil(4.6)); //5

cl(Math.floor(4.6)); // 4

cl(Math.random()) // 0.87845763

cl((Math.random()*10)+1); //5.209450369720802

cl(Math.floor((Math.random()*10)+1)); //2

const max = 20;
const min = 10;
// for generating numbers between max and min
cl(Math.floor(Math.random() * (max - min + 1)) + min); //18