// in Js we can pass function as a parameter to another function
function square(number) {
    return number * number;
}
function cube(number) { 
    return number * number * number;
}
function calculate(fn, number) {
    return fn(number);
}
console.log(calculate(square, 2)); // 4
console.log(calculate(cube, 2)); // 8