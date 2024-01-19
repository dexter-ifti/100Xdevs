const cl = console.log;
let myDate = new Date();
cl(myDate.toString());// Fri Jan 19 2024 13:00:55 GMT+0000 (Coordinated Universal Time)

cl(myDate.toDateString()); // Fri Jan 19 2024

cl(myDate.toLocaleString());//1/19/2024, 1:22:40 PM
cl(myDate.toLocaleDateString()); // only data in MM/DD/YY

cl(typeof myDate); //Object
cl("---------------------------------------");

let myCreatedDateOne = new Date(2023, 0, 23);
cl(myCreatedDateOne.toLocaleString()); // 1/23/2023, 12:00:00 AM

let myCreatedDateTwo = new Date(2023, 0, 23, 5, 3);
cl(myCreatedDateTwo.toLocaleString()); //1/23/2023, 5:03:00 AM

let myCreatedDateThree = new Date("2023-01-13");
cl(myCreatedDateThree.toLocaleString());//1/13/2023, 12:00:00 AM

let myCreatedDatefour = new Date("01-14-2023");
cl(myCreatedDatefour.toLocaleString());// 1/14/2023, 12:00:00 AM

cl("---------------------------------------");
let myTimeStamp = Date.now();

cl(myTimeStamp); // 1705670355618 ms
cl(myCreatedDateOne.getTime()); //1674432000000  ms
cl(Math.floor(Date.now()/1000)); //1705670355 seconds

cl("---------------------------------------");
let newDate = new Date();
cl(newDate);
cl(newDate.getMonth() + 1); // in Number i.e. 1
cl(newDate.getDay()); // Day - like Sunday
cl(newDate.getDate()); //DD - like 19

myDate.toLocaleString('default', {
    weekday : "long"
})