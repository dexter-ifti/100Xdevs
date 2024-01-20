const cl = console.log;

const tinderUser = new Object(); //Singleton Object, same as tinderUser = {};
cl(tinderUser);

tinderUser.id = "123ab";
tinderUser.email = "abc@yahho.com";
tinderUser.isloggedIn = true;

cl(tinderUser);

const regularUser = {
    email : "xyz@fun.com",
    fullname : {
        username : {
            firstName : "dexter",
            lastName : "ifti",
        }
    }
}

cl(regularUser.fullname.username.firstName.toUpperCase());


const obj1 = {1 : 'a', 2: 'b'}; 
const obj2 = {3 : 'c', 4: 'd'}; 
const obj3 =  {5 : 'e', 6: 'f'};

// for merging we can simply close them in {} but,
//  they will remain in complex form, 
//  i.e. object inside object (nested objects)
const obj4 = {obj1, obj2, obj3};
cl(obj4);

// to overcome this problem we have to ways - 
//1 ->  Object.assign() Method
const obj5 = Object.assign(obj1, obj2, obj3);
cl(obj5);

//2 -> spread Operator

const obj6 = {... obj1, ... obj2, ... obj3};
cl(obj6);

const users = [
    {
        id : 1,
        email : "abc@gmail.com",
    },
    {
        id : 2,
        email : "tuv@gmail.com"
    },
    {
        id : 3,
        email : "xyz@gmail.com"
    }
]
cl(users[1].email);

cl(tinderUser);
cl(Object.keys(tinderUser));
cl(Object.values(tinderUser));
cl(Object.entries(tinderUser));
cl(tinderUser.hasOwnProperty('isloggedIn'));


const course = {
    courseName : "100xDevs",
    price : "9999999999999999",
    courseInstructor : "Harkirat"
} 
const {courseInstructor} = course;
// by doing this we can shorten the words,
// instead of course.courseInstructor now we can write 
// courseInstructor, it will work same as previuos
// it is called de structuring the object
cl(courseInstructor);
// if wwe want more shorten then we can do by this way =
const {courseInstructor : instructor} = course;
cl(instructor); // this will also work same as previuos


















