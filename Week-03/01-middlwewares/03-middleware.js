const express = require('express');

const app = express();

app.use(express.json());

app.get('/health-cheakup', (req, res) => {
    const kidney = req.body.kidney;
    const kidneyLength = kidney.length;
    res.send("You have " + kidneyLength + " kidneys");
})

// global catches
app.use((err, req, res, next) =>{
    res.json({
        msg : "Sorry ! Something is up with Server",
    })
})

app.listen(3000);