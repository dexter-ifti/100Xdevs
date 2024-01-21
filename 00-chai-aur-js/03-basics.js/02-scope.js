let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 300
    console.log("INNER: ", a);
    
}



console.log(a);
// console.log(b); //will throw error
console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); //this will not thrwo error
    }
    // console.log(website); //will throw error 

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //error
}

// console.log(username); //error


// ++++++++++++++++++ interesting ++++++++++++++++++

// Hoisting -- a function can  be called above its decalration
// but a function expression can't

// will run
console.log(addone(5))

function addone(num){
    return num + 1
}


// will thorw error
addTwo(5)
const addTwo = function(num){
    return num + 2
}