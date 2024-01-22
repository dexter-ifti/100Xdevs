const myNum = [1,2,3,4,5,6,7,8,9,10];

const newNum = myNum.map( (item) => item + 10);
console.log(newNum);
/**
 * [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
  ]
 */

const newNums = myNum
                .map( (item) => item * 10)
                .map( (item) => item + 1)
                .filter( (item) => item >= 40);
console.log(newNums);
/**
 * this is called chaining
 * [
  41, 51,  61, 71,
  81, 91, 101
]
 */