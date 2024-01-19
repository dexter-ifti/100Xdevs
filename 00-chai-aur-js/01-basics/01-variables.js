const accountId = 343;
let accountEmail = "abc@gmail.com";
var accountPassword = "23";
accountCity = "Mahmudabad";
let accountState; //in Js if any variable is not initialized the it is undefined

// accountId = 2; Not allowed because it is declared as Constant

accountEmail = "taha@google.com";
accountPassword = "321";
accountCity = "MMB";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/**
 * it is prefer not to use "var"
 * because of block scope and functional scope
 */