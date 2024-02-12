class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Hello, ${this.username}`);
    }

    static createId(){
        return '123';
    }
}

const dexter = new User('dexter');
// console.log(dexter.createId()); 
// 🐱‍👤TypeError: dexter.createId is not a function

class Admin extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }

    addCourse(){
        console.log(`${this.username} has added a new course`);
    }
}

const chai = new Admin('chai', 'chai@g.com');
// console.log(chai.createId()); 
// TypeError: chai.createId is not a function