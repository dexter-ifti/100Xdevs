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