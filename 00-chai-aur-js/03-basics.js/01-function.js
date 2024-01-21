function sayMyName() {
    console.log('d');
    console.log('e');
    console.log('x');
    console.log('t');
    console.log('e');
    console.log('r');
}

sayMyName();

function add(num1, num2) {
    console.log(num1 + num2);
}

add(); // will give undefined
add(4,5); // //9

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(4,5));


function loginUserMeassage(username = "dexter") {
    // i gave the default string to the username ,
    //  so if condotion will never execute
    // when no argument is passed in the fxn call ,
    // it will automatically take 'dexter' as username
    if (!username) {
        console.log("please Enter the username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMeassage());
console.log(loginUserMeassage("ifti"));

function calculateCartPrice(... num1) {
    /**
     * here we can multiple parameters 
     * they will be stored in an array
     */
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 100 ,4,3,65,'m7',56));

const user = {
    username : "dexter",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

// handleObject(user)
handleObject({
    username : "sam",
    price : 399
})

const newArray = [200, 400, 100, 500];

function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(newArray);



















