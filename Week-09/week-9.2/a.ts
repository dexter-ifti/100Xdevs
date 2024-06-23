const x : number = 101;

console.log(x);

function greet(firstName : string) : void {
    console.log(`Hello ${firstName}`);
}


greet('John');

function sum (a : number, b : number) : number {
    return a + b;
}

console.log(sum(9,8));


function delayedCall(cb : () => void) : void {
    setTimeout(cb, 1000);
}

delayedCall(() => {
    console.log('This is a delayed call');
});

interface User {
    firstName: string;
    lastName: string;
    age: number;
    email ?: string; // optional
}

function createUser(user : User) : void {
    console.log(user);
}

createUser({
    firstName: 'John',
    lastName: 'Doe',
    age: 30
});

class Employee implements User {
    firstName: string;
    lastName: string;
    age: number;
    email: string;

    constructor(firstName : string, lastName : string, age : number, email : string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}


const emp = new Employee('John', 'Doe', 30, 'abc@gmail.com')
console.log(emp);

type stringOrNumber = string | number;

function printId(id : stringOrNumber) : void {
    console.log(id);
}

printId('abc');
printId(123);
