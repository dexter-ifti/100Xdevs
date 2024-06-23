// first thread will execute this code
let a = 1;
console.log(a);

// first thread will give it to OS and OS will give it to second thread
// second thread will execute this code
// this is async function
const fs = require("fs");
const path = "/workspaces/100Xdevs/Week-2/01-class-code/a.txt"
fs.readFile(path, "utf-8", (err, data) => {
    console.log("File Reading is Done and Content is : ", data);
});

// first thread will execute this code
// this is sync function
// after doing this , the first thread returns to the async function
let ans = 0;
for(let i = 0; i < 1000; i++){
    ans++;
}
console.log(ans);