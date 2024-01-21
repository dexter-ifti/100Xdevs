const coding = ["js", "py", "java", "ruby", "cpp"];

coding.forEach(function (val) {
    console.log(val);   
})

coding.forEach((item) => {
    console.log(item);   
})

coding.forEach( (item, index, arr) => {
    console.log(item ,index, arr);
})

const myCoding = [
    {
        languageName : "javascript",
        extentionName : "js"
    },
    {
        languageName : "java",
        extentionName : "java"
    },
    {
        languageName : "python",
        extentionName : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item); 
})