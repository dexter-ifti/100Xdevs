const jwt = require('jsonwebtoken');

const content = {
    name : "taha iftikhar",
    accountNumber : "123123123"
}

const token = jwt.sign(content, "secret");
console.log(token);
/**
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGFoYSBpZnRpa2hhciIsImFjY291bnROdW1iZXIiOiIxMjMxMjMxMjMiLCJpYXQiOjE3MDUzNzEzNzd9.w0ZF_5fM82-m9kgrugEpD68XeFIsBx9Dng4ejRdXf5Y
 */
const verify = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGFoYSBpZnRpa2hhciIsImFjY291bnROdW1iZXIiOiIxMjMxMjMxMjMiLCJpYXQiOjE3MDUzNzEzNzd9.w0ZF_5fM82-m9kgrugEpD68XeFIsBx9Dng4ejRdXf5Y", "secret");
console.log(verify);