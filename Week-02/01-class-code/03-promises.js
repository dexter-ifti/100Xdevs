// Just a more readable way to write callbacks
// Promises are a way to handle asynchronous code

function myOwnSetTimeout(callback, duration) {
    setTimeout(callback, duration);
}
// this is using the callback pattern
myOwnSetTimeout(()=> {
    console.log("Timeout is done");
})

function promisifiedSetTimeout(duration) {
    return new Promise((resolve)=> {
        setTimeout(() =>{
            resolve()
        }, duration)
    });
}

// this is using the promise pattern	
promisifiedSetTimeout(1000).then(()=> {
    console.log("Timeout is done");
})