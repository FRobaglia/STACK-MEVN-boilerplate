const express = require('express');
const profileRoutes = express.Router();

// Require Post model in our routes module
const Profile = require('./profile.model');


// Defined get data(index or listing) route
profileRoutes.route('/').get(function(req, res) {
  Profile.find(function(err, profiles) {
    if (err) {
      res.json(err);
    } else {
      res.json(profiles);
    }
  });
});

// create
profileRoutes.route('/create').post(function(req, res) {
  const profile = new Profile(req.body);
  profile.save()
  .then(() => {
    res.status(200).json({ 'business': 'business in added successfully' });
  })
  .catch(() => {
    res.status(400).send('unable to save to database');
  });
});
module.exports = profileRoutes;
