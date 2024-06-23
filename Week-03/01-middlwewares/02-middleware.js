const express = require('express');

const app = express();

function userMiddleware(req, res, next) {
    if (username != 'dexter' && password != 'pass') {
        res.json({
            msg : "Incorrect Input",
        })
    }else{
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg : "Incorrect Inputs",
        })
    }else{
        next();
    }
}

app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Your heart is healthy");
})

app.get('/kidney-check', userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("YOur kidney is Healthy");
});

app.listen(3000);