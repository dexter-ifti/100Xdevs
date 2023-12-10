

const fs = require("fs");
// it will resolve before the loop ends
// but still it will wait for the loop to end
// when the loop ends, it will execute the callback function
fs.readFile("/workspaces/100Xdevs/Week-1/offline-class/class-3/a.txt", "utf-8", function(err, data){
    console.log(data);
});
console.log("I am synchronous function");

let a = 0;
// as this is synchronous, it will take a lot of time to execute
for(let i = 0; i < 10000000000; i++) {
    a += i;
}
console.log("Bye");