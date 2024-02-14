// 11 - Property Getters and Setters
// this is a way to define a property in an object, but with a special syntax
// we can define a getter and a setter for a property
// so when we access the property, the getter is called
// and when we set the property, the setter is called
// this is the old/traditional way of defining getters and setters
function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value;
        }
    })
}

const chai = new User("chai@chai.com", "chai");

console.log(chai.email);