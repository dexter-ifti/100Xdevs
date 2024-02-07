const promiseOne = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        console.log('Async work complete');
        resolve();
    }, 1000);
}) ;

promiseOne.then( () => {
    console.log('Promise resolved');
});

// Async work complete
// Promise resolved

new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        console.log('Async work 2 complete');
        resolve();
    }, 1000)
}).then( () => {
    console.log('Promise 2 resolved');
});

// Async work 2 complete
// Promise 2 resolved

const promiseThree = new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log('Async work 3 complete');
        resolve({username: 'dexter', email: 'dexter@example.com'});
    }, 1000);
})

promiseThree.then( (user) => {
    console.log('Promise 3 resolved with user:', user);
});

// Async work 3 complete
// Promise 3 resolved with user: { username: 'dexter', email: 'dexter@example.com' }


const promiseFour = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let erorr = true;
        if(!erorr){
            resolve({username: 'dexter', email: 'dexter@example.com'});
        }else {
            reject('Error: Something went wrong');
        }
    }, 1000)
});

const username = promiseFour
.then( (user) => {
    console.log(user);
    return user.username;
})
.then( (username) => {
    console.log('Username:', username);
})
.catch( (erorr) => {
    console.log(erorr);
})
.finally( () => {
    console.log('the promise is either resolved or rejected');
});

// Error: Something went wrong
// the promise is either resolved or rejected

const promiseFive = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let erorr = true;
        if(!erorr){
            resolve({username: 'ifti', password: '123'});
        }else {
            reject('Error: JS went wrong');
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    } catch(erorr){
        console.log(erorr);
    }
}

consumePromiseFive();

// Error: JS went wrong

async function getAllUsers(){
    try
    {
        const reponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await reponse.json();
        console.log(data);
    }catch(erorr){
        console.log(erorr);
    }
}

getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json();
})
.then( (data) => {
    console.log(data);
})
.catch( (erorr) => {
    console.log(erorr);
});
