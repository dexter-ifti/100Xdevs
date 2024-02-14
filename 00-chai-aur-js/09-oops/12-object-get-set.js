const User = {
    _email : "chai@chai.com",
    _password : "chai",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}

const tea = Object.create(User);
console.log(tea.email);