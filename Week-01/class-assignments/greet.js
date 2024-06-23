// Write the program to greet a person given their first and last name 
const firstName = "dexter";
const lastName = "ifti";
console.log(`hello ${firstName} ${lastName}`);

//Write a program that greets a person based on their gender. (If else)
const users = 
[
    {
        fn : "dexter",
        gender : "M"
    }, 
    {
        fn : "ifti",
        gender : "M"
    },
    {
        fn : "priya",
        gender : "F"
    }
]
for(let i = 0; i < users.length; i++){
    if (users[i]["gender"] == "F") {
        console.log(users[i]["fn"]);
    }
}