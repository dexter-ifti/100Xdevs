const express = require('express');

const app = express();

// app.get('/health-checkup', (req, res) => {
//     const username = req.headers.username;
//     const passward = req.headers.passward;
//     const kidneyId = req.query.kidneyId;

//     if (!(username === 'dexter' && passward === 'pass')) {
//         res.status(400).json({
//             msg : "Bad Inputs",
//         });
//         return;
//     }
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({
//             msg : "Something up with your inputs",
//         });
//         return;
//     }
//     res.status(200).json({
//         msg : "Your Kidneys are fine"
//     })
// });


function usernameValidator(username, password) {
    if (username != 'dexter' || password != 'pass') {
        return false;
    }
    return true;
}

function kidneyValidator(kidneyId){
    if(kidneyId == 1 || kidneyId == 2) return true;
    return false; 
}
app.get('/health-checkup', (req, res) => {

    if (!usernameValidator(req.headers.username, req.headers.passward)) {
        res.status(400).json({
            msg : "User Doesn't Exist",
        });
        return;
    }
    if(kidneyValidator(req.query.kidneyId)){
        res.status(400).json({
            msg : "wrong inputs",
        });
        return;
    }
    res.status(200).json({
        msg : "Your Kidneys are fine"
    })
});
app.post('/replace-kidney', (req, res) => {

    if (!usernameValidator(req.headers.username, req.headers.passward)) {
        res.status(403).json({
            msg : "User Doesn't Exist",
        });
        return;
    }
    if(kidneyValidator(req.query.kidneyId)){
        res.status(411).json({
            msg : "wrong inputs",
        });
        return;
    }
    res.status(200).json({
        msg : "Your Kidneys are fine"
    })
});

app.listen(3000);