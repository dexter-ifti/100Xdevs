// 10 - Getters and Setters in JavaScript
// this is a way to define a property in an object, but with a special syntax
// we can define a getter and a setter for a property
// so when we access the property, the getter is called
// and when we set the property, the setter is called
// this is the new way of defining getters and setters
// we use the get and set keywords
// we use _ to define a private property
class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}dexter`;
    }

    set password(value){
        this._password = value;
    }
}

const dexter = new User("dexter@abc.com", "abc");
console.log(dexter.email);