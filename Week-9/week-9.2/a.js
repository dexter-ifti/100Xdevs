"use strict";
const x = 101;
console.log(x);
function greet(firstName) {
    console.log(`Hello ${firstName}`);
}
greet('John');
function sum(a, b) {
    return a + b;
}
console.log(sum(9, 8));
function delayedCall(cb) {
    setTimeout(cb, 1000);
}
delayedCall(() => {
    console.log('This is a delayed call');
});
function createUser(user) {
    console.log(user);
}
createUser({
    firstName: 'John',
    lastName: 'Doe',
    age: 30
});
class Employee {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}
const emp = new Employee('John', 'Doe', 30, 'abc@gmail.com');
console.log(emp);
