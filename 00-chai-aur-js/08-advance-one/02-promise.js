const promiseOne = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        console.log('Async work complete');
        resolve();
    }, 1000);
}) ;

promiseOne.then( () => {
    console.log('Promise resolved');
});

new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        console.log('Async work 2 complete');
        resolve();
    }, 1000)
}).then( () => {
    console.log('Promise 2 resolved');
});

