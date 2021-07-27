const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema(
    {
        name: String,
        password: String,
        image: String
    }
    );
    

const User = mongoose.model('User', UserSchema);
        
module.exports = User;
        