/**
 * A function in JavaScript is a set of statements that performs a task or calculates a value.
 * It should take some input and return an output where there is some obvious relationship between the input and the output.
*/

/**
 * Calculates the sum of numbers from 1 to n.
 * @param {number} n - The number up to which the sum should be calculated.
 * @returns {number} - The sum of numbers from 1 to n.
 */
function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}
// another example
function add(a, b) {
    return a + b;
}

