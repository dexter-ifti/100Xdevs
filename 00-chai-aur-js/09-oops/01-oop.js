const user = {
    username: 'dexter',
    age: 19,
    isLoggedIn: false,
    getUserDetials : function() {
        console.log('user details');
        console.log(`username: ${this.username}`);
        // console.log(this);
    }
}
console.log(user.username);
user.getUserDetials();
console.log(this);

// Constructor function - it is a function that is used to create an object of a particular type of object with the help of new keyword and this keyword is used to refer to the object that is created by the constructor function and it is returned by default
function User(username, age, isLoggedIn) {
    this.username = username;
    this.age = age;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function() {
       console.log(`Hello ${this.username}`);
    }
    return this; // this is returned by default so we don't need to write it explicitly 
}

const userOne = new User('dexter', 19, false);
// if we don't use new keyword here then when we declare userTwo it will override the userOne
const userTwo = new User('ifti', 18, true);
console.log(userOne);
console.log(userTwo);


// Prototypes - it is a way to add properties and methods to the constructor function
// Read this article for more details of instanceof : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof