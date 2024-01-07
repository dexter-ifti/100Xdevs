const { application } = require("express");

// traditional function
function sum(n){
    let s = 0;
    for (let index = 0; index < n; index++) {
        s += i;
    }
    return s;
}

// arrrow function
const summ = (n) => {
    let s = 0;
    for(let i = 0; i < n; i++){
        s += i;
    }
    return s;
}

// eaxample in creating HTTP Server

// AAM Jindagi😒

app.get("/", function(req, res) {
    res.send("Hello Ifti");
});

// Mentos Zindagi🤑🤑

app.get("/", (req, res) => {
    res.send("Hello Mentos");
});