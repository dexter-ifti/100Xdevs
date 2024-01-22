const myNums = [1,2,3];

let myTotal = myNums.reduce( (acc, currval) => { 
    console.log(`acc :- ${acc} and Currval ;- ${currval}`);
    return acc + currval 
}, 0)
console.log(myTotal);
/**
 * acc :- 0 and Currval ;- 1
 * acc :- 1 and Currval ;- 2
 * acc :- 3 and Currval ;- 3
6
 */

myTotal = myNums.reduce( (acc, currval) => acc+currval, 0);
console.log(myTotal); // 6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart
                .reduce( (acc, item) => acc + item.price, 0);

console.log(priceToPay); // 22996