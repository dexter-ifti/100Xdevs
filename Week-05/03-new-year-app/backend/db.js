const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dexter_ifti:67XnVWNvgjMo963f@cluster0.o0es3zy.mongodb.net/todos');
const todoSchema =
 mongoose.Schema({
   title: String,
   description: String,
   completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}