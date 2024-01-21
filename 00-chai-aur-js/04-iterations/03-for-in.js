const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);
}
/*
js is shortcut for javascript
cpp is shortcut for C++
rb is shortcut for ruby
swift is shortcut for swift by apple
*/

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    // console.log(programming[key]);      
} 
/*
js
rb
py
java
cpp
*/


// for-in loop doesn't work on map
//  following loop doesn't log anything nor throw any error
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
