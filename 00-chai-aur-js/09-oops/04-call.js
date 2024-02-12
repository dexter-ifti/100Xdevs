function SetUserName(username){
    this.username = username;
}

function createUser(username, email, password){
    // if we call only only SetUseranme then it will not work as it is not a method of createUser
    // so we have to call it using call method and pass this as first argument
    SetUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "1234");
console.log(chai);