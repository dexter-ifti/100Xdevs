const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require('jsonwebtoken');

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    const user = new Admin({
        username : username,
        password : password
    });
    user.save();
    res.json({
        "msg" : "Admin Created Successfully",
    })
});

router.post('/signin', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const user = await Admin.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    }else{
        res.status(411).json({
            message : "Incorrect Email and Password"
        })
    }
})

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink} = req.body;
    const course = new Course({
        title : title,
        description : description,
        price : price,
        imageLink : imageLink,
    })
    course.save();
    res.json({
        "msg" : "Course Created Successfully",
        CourseId : course._id,
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const responce = await Course.find({});
    res.json({
        courses : responce
    })
});

module.exports = router;