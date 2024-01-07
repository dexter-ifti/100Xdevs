// Problem Double every element of given array

// AAAM Zindagi😒😒

const nums = [1, 2, 3, 4, 5];

function double(nums){
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    newArr[i] = nums[i] * 2;
  }
  return newArr;
}

const newArr = double(nums);
console.log(newArr);


// Mentos Zindagi🤑🤑

function transform(a){
    return a*2;
}

const newNums = nums.map(transform);

console.log(newNums);

// class assignment - create a map function that takes 2 inputs an array and a callback `transform` function and transform the array into a new array using transform function     