const express = require('express');
const zod = require('zod');
const app = express();

const schema = zod.array(zod.number());


const schema_ = zod.object({
    email : zod.string(),
    password : zod.string(),
    country : zod.literal("In").or(zod.literal("US")),
    kidneys : zod.array(zod.number())
})

app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg : "Input is invalid",
        })
    }else{
        res.send({
            response
        });
    }
});

app.listen(3000);
