const user = {
    username : "dexter",
    price : 999,
    welcomeMessage : function()  {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "ifti";
user.welcomeMessage();

console.log(this);

function chai() {
    let username = "dexter";
    console.log(this.username);
}

chai();

const chaiOne = () => {
    let username = "dexter";
    console.log(this.username);
}

chaiOne();

const chaiTwo = () => {
    let username = "dexter";
    console.log(this);
}

chaiTwo();


const addTwo = (num1, num2) => {
    return num1 + num2;
}

const add_two = (num1, num2) => num1 + num2;

const add_Two = (num1, num2) => (num1 + num2);

const name = () => ({username : "dexter"});

console.log(addTwo(2,3));
console.log(add_two(2,3));
console.log(add_Two(2,3));
console.log(name());