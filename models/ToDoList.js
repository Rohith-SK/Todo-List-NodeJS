const mongoose = require('mongoose')

const ToDoListSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    }
})

module.exports = new mongoose.model("ToDoList", TodoListSchema)