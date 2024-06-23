const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://archonbumper:3bpEqjHI3GjcXgWF@cluster0.w6h1zkb.mongodb.net/user_app");

const User = mongoose.model('Users', {name: String, email: String, password: String});

app.get('signup', async (req, res) => {
    const {name, password, email} = req.body;

    const existingUser = await User.findOne({email: name});

    if (existingUser) {
        return res.status(400).send("Username Already Exist");
    }

    
    const user = new User({
        name : name,
        email : email,
        password: password
    });

    user.save();
    res.json({
        "msg": "User Created Successfully"
    })
})

