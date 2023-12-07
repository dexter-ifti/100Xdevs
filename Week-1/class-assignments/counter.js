// Initialize a counter variable to 30
let counter = 30;

// Define a function named 'print'
function print() {
    // If the counter is less than 0, exit the function
    if (counter < 0) {
        return;
    }
    // Log the current counter value and then decrement it
    console.log(counter--);
}

// Call the 'print' function every 100 milliseconds
setInterval(print, 1000);

// Seconf Method - 
// Define a second function named 'print2' 
function print2() {
    // If the counter is less than 0, exit the function
    if(counter < 0) return;
    // Log the current counter value and then decrement it
    console.log(counter--);
    // Call the 'print2' function after 100 milliseconds
    setTimeout(print2, 100);
}

// either call this 
// setTimeout(print2, 100);
// or this
print2();

/*
* for(let i = 0; i < 30; i++){
*     setTimeout(print, (i+1)*100);
*    }
*/