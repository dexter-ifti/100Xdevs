const coding = ["js", "ruby", "py", "java", "cpp"];

const values = coding.forEach((item) => {
    console.log(item);
    return item
});
console.log(values);

// js
// ruby
// py
// java
// cpp
// undefined

// the main problem with the foaeach loop is that it does'nt 
// return anything 
// so filter() comes in the picture

const myNums = [1,2,3,4,5,6,7,8,9,10];


let newNums = myNums.filter( (item) => item);
console.log(newNums);

/**
 * [1, 2, 3, 4,  5,
    6, 7, 8, 9, 10]
*/

newNums = myNums.filter( (item) => item > 4);
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// above functionality can be achieved by foreach also

const myNums2 = [];
myNums.forEach((item) => {
    if (item > 4) {
        myNums2.push(item);
    }
})
console.log(myNums2); // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((item) => item.genre === 'History');
console.log(userBooks);
/**
 * [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
  ]
 */

  userBooks = books.filter( (item) => item.publish >= 2000);
  console.log(userBooks);
  /**
   * [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
  ]
   */
