/**
 * File cleaner
 * Read a file, remove all the extra spaces and write it back to the same file.
 * 
 * For example, if the file input was
 * hello     world    my    name   is       raman
 * 
 * After the program runs, the output should be
 * 
 * hello world my name is raman
 */

const fs = require('fs');
// let str;
fs.readFile('a.txt', 'utf8', (err, data) => {
  if (err) throw err;
  let str = data;
  console.log(str);
  str = str.replace(/\s+/g,' ').trim();
  console.log(str);
});
