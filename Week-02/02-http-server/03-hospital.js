const express = require('express');

const user = [{
    name : "John",
    kidneys : [{
        healthy : false
    }]
}];
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
});

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "done!"
    })
});

app.put("/", (req, res) => {
    for(let i = 0; i < user[0].kidneys.length; i++){
        user[0].kidneys[0].healthy = true;
    }
    res.json({});
});

app.delete("/", (req, res) => {
    const newKidneys = [];
    for(let i = 0; i < user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newKidneys.push({
                healthy : true
            })
        }
    }
    user[0].kidneys = newKidneys;
    res.json({msg : "done"});
})

app.listen(3000);