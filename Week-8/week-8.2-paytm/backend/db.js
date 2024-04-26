const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dexter_ifti:67XnVWNvgjMo963f@cluster0.o0es3zy.mongodb.net/');


const schema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 15,
        lowercase: true
    },
    firstName : {
        type : String,
        required : true,
        trim : true,
        maxlength: 50
    },
        
    lastName: {
        type: String,
        required: true,
        trim : true,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

const User = mongoose.model('User', schema);

module.exports = User;