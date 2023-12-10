function tahaAsyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });
}

// any function which wants to use await should be async
async function main(){
    // if dont use await then it will return a promise
    let val = tahaAsyncFunction();
    console.log(val);
    // if we use await then it will return the value
    // rather than using .then syntax, we add the await keyword before and get the final value in the variable
    let value = await tahaAsyncFunction();
    console.log(value);
}

main();


// Summary
/**
 * Callback -> Promises(then) -> Async/Await - are same thing
 */