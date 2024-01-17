const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

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

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {id, title, description, price, imageLink, published} = req.body;
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