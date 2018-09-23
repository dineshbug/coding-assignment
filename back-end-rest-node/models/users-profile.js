const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    login:String,
    followers:String,
    following:String,
    repos_url:String,
    avatar_url:String,
    blog:String
});

const UserProfile = mongoose.model('userProfile', userProfileSchema);

module.exports = UserProfile;