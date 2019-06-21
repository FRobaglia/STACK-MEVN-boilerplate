const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
const Profile = new Schema({
  name: {
    type: String
  }
}, {
  collection: 'profiles'
});

module.exports = mongoose.model('Profile', Profile);
