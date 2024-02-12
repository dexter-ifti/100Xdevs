let myName = "dexter      ";
let myName2 = "ifti      ";

// what if we want to calculate the true length of the name but we don't want to use trim() method everytime as there will be a lot of code repetition

// we can use prototype to add a method to the String object
// it will discuss later part of this file

let myHeros = ["thor", "ironman", "hulk", "captain america"];

let heroPower = {
    thor : "hammer",
    ironman : "suit",

    getIronPower: function() {
        console.log(`Iron Power is ${this.ironman}`);
        
    }
}

Object.prototype.dexter = function() {
    console.log(`dexter is present in all objects`);
}

Array.prototype.sayDexter = function() {
    console.log(`dexter is present in all arrays`);
}

heroPower.dexter(); // it will work as dexter is a method of Object object
myHeros.dexter(); // it will work as dexter is a method of Array object
myHeros.sayDexter(); // it will work as sayDexter is a method of Array object
// heroPower.sayDexter(); // it will not work as sayDexter is a method of Array object and heroPower is an object


//  inheritence using prototype

const user = {
    name: "chai",
    email : "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport  = {
    isAvailable : false
}

const TA = {
    makeAssignment : 'JS Asignments',
    fullTime : false,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode            ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength(); 
// ChaiAurCode
// True length is : 11