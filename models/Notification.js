const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const NotificationsSchema = new Schema({
    notify_number: {
        type: Number,
        required: true
    },
    User_id: {
        type: Number,
        required: true
    },
    MSG: {
        type: String,
        required: true
    }
})

module.exports = User = mongoose.model('notifications', NotificationsSchema)