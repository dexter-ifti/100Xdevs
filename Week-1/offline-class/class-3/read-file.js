const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
});
// console.log("I am synchronous function");