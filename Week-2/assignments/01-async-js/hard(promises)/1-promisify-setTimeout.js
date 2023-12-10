/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(n){
    return new Promise((resolve) => {
        setTimeout(resolve("Hello"), n*1000)
    });
}

module.exports = wait;
// promisify(5).then((data) => {
//     console.log(data);
// });