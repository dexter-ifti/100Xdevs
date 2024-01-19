const cl = console.log;
const score = 300;
cl(score);
const balance = new Number(40000); //just another way of declaring 
cl(balance); //[Number : 40000]

cl(balance.toString());
cl(balance.toString().length);

cl(balance.toFixed(1)) //40000.0

const anotherNum = 1234.45
cl(anotherNum.toPrecision(4)); //1234
cl(anotherNum.toPrecision(5)); //1234.5


const hundreds = 1000000000000000;
cl(hundreds.toLocaleString()); //1,000,000,000,000,000 - American
cl(hundreds.toLocaleString('en-IN')); // 1,00,00,00,00,00,00,000 - Indian

