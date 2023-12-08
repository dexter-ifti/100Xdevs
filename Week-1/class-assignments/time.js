// Calculate the time it takes between a setTimeout call and the inner function actually running 

// Define the greet function
let startTime = new Date().getTime(); // Get the start time
function greet(){
    console.log("Asslamualaikum WB"); // Print a greeting message
    let endTime = new Date().getTime(); // Get the end time
    console.log((endTime - startTime)); // Calculate and print the time difference
}

// Call the greet function after a delay of 1000 milliseconds
setTimeout(greet, 1000);

let sum = 0;
for(let i = 0; i < 10000; i++){
    sum += i;
}
