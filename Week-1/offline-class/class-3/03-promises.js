// Just a wrapper around callbacks
// we are trying to create a own async function
// but ended up creating a wrapper around callbacks

let path = "/workspaces/100Xdevs/Week-1/offline-class/class-3/a.txt";
/*
const fs = require("fs");
function tahaReadFile(callback) {
    fs.readFile(path, "utf-8", function(err, data){
        callback(data);
    });
}
tahaReadFile(function(data) {
    console.log(data);
});
*/
// Promises are a way to handle asynchronous operations in JavaScript, without the need of using callbacks.

const fs = require("fs");
function tahaReadFile() {
    return new Promise(function(resolve) {
        fs.readFile(path, "utf-8", function(err, data){
            resolve(data);
        });
    })
}
// complex way of writing promises
// tahaReadFile().then(function(data) {
//     console.log(data);
// });

// simple way of writing promises
// let a = tahaReadFile();
// console.log(a);
// a.then(function(data) {
//     console.log(data);
// });



// promise class
function tahaAsyncFunction(){
    let d = new Promise(function(resolve){
        setTimeout(() => {
            resolve("hello");
        }, 1000)
    });
    return d;
}

// console.log(d);
tahaAsyncFunction().then(function(data) {
    console.log(data);
});