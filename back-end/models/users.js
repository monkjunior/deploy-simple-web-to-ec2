const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create users schema and model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required!']
    },
    password: {
        type: String,
    },
    login: {
        type: Boolean,
        default: false
    }
});
const Users = mongoose.model('users', UserSchema);

module.exports = Users;
