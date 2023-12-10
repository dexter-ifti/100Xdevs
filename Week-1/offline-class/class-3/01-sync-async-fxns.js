// // synchronous - one after another or sequentially only one at a time
// // asynchronous - multiple at a time

// // Synchronous function
// function findSum(n) {
//     let sum = 0;
//     for(let i = 0; i < n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// // console.log(findSum(100));

// // Asynchronous function - setTimeout()
// setTimeout(function() {
//     console.log('I am asynchronous function');
// }, 1000);
// console.log('I am synchronous function');


function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
  }
  
  function findSumTill100() {
    console.log(findSum(100));
  }
  
  setTimeout(findSumTill100, 1000)
  console.log("hello world");