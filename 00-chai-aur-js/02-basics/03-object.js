const cl = console.log; 

// singleton --> Object.create()

// Object literals

const mySym = Symbol("key1");

const JsUser = {
    name : "Dexter",
    "full name" : "Dexter Ifti",
    [mySym] : "myKey1",
    age : 18,
    location : "MMB",
    email : "dexter@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

cl(JsUser.email);
cl(JsUser["email"]);
cl(JsUser["full name"]);
cl(JsUser[mySym]);

JsUser.email = "dexter@microsoft.com";
// Object.freeze(JsUser); // object becomes immutable
JsUser.email = "dexter@meta.com";
cl(JsUser);

JsUser.greeting = function() {
    console.log("Helo JS User");
};

JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();