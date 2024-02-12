class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Hello, ${this.username}`);
    }
}

class Admin extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }

    addCourse(){P
        console.log(`${this.username} has added a new course`);
    }
}

const chai = new Admin('chai', 'chai@gmail.com');

chai.logMe();

const masalaChai = new User('masalaChai');

masalaChai.logMe();

console.log(chai instanceof Admin); // true
console.log(chai instanceof User); // true
console.log(masalaChai instanceof Admin); // false
console.log(masalaChai instanceof User); // true
