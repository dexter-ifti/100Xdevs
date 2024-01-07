// Problem - write logic for filtering out even elements from an array
// without using loops 

const arr = [1,2,3,4,5,6,7,8];

function filterLogic(n){
    if(n % 2 == 0) return true;
    return false;
}

const ans = arr.filter(filterLogic);

console.log(ans);

// more cleaner - arrow function

const a = arr.filter((n) => {
    if(n % 2 == 0) return true;
    return false;
});

console.log(a);