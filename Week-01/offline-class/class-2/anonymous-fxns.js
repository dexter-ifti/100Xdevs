function sumOfSomething(a, b, fn){
    return (fn(a) + fn(b));
}

sumOfSomething(2, 3, function(number){
    return number * number;
}); // 13
