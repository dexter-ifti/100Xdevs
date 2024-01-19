const cl = console.log;
const arr = [1,2,3,4,5,6,7,7,8,8,9];
cl(arr);

cl(arr[2]);
cl(arr[17]); //invalid index will give undefined
cl(arr[0]);

arr.push(32);
arr.push(100);
cl(arr)
arr.pop();
cl(arr)

arr.unshift(6666); // adding element at the start of the array
arr.shift(); //pop element from starting of the arr

cl(arr.includes(999)); //returns true or false
cl(arr.indexOf(32)); // return -1 if not includes else index number

cl(arr.join()); // convert array into String 

// SLICE and SPLICE

const myArr = [0,1,2,3,4,5];
cl("A " + myArr); //0,1,2,3,4,5

cl("B " + myArr.slice(0,4)); // 0,1,2,3

// after slicing oroiginal array remains same 

cl("C " + myArr); // 0,1,2,3,4,5

cl("D " + myArr.splice(0,4)); //0,1,2,3

// after splicing oroiginal array doesn't remain same , splice method delete the elements from given the range

cl("C " + myArr); // 4,5