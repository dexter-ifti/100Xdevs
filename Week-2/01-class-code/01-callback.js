function square(n){
    return n*n;
}

function cube(n) {
    return n*n*n;
}

function quad(n) {
    return n*n*n*n;
}
/*
* ✨Here , in below functions we are doing some sort of repetition, which is violeting CS fundamnetal Principle DRY
so instead of this we can write generic function -with the help of callback function
🚀
function sumOfSqaure(a, b){
    return square(a) + square(b);
}
function sumOfCube(a, b){
    return cube(a) + cube(b);
}
*/
// callback function
function sumOfSomething(a, b, fn) {
    return fn(a) + fn(b);
}

console.log(sumOfSomething(2,4,square));


// Basic Principle of CS - "DON'T RPEAT YOURSELF(DRY)"
// thas why we use callback functiions