//  in js the concept of the classes is introduced in ES6
//  before that we used to create classes using functions and prototypes 

// 1. create a class using function and prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.isAdult = function() {
    return this.age >= 18;
}

let p1 = new Person('Harry', 12);
let p2 = new Person('Ron', 22);

console.log(p1.isAdult());
console.log(p2.isAdult());

// 2. create a class using ES6
class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isAdult() {
        return this.age >= 18;
    }
}

let p3 = new Man('Harry', 12);
let p4 = new Man('Ron', 22);

console.log(p3.isAdult());
console.log(p4.isAdult());

// upper code is equivalent to the below code 
// upper code is generated by the github co-pilot

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encrptPassword() {
        return `${this.password}xyz`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai', 'chai@gmaiol.com', '123');
console.log(chai.encrptPassword());
console.log(chai.changeUsername());

// behind the scenes

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encrptPassword = function() {
    return `${this.password}xyz`;
}

User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User2('tea', 'tea@gmail.com', '123');
console.log(tea.encrptPassword());
console.log(tea.changeUsername());
