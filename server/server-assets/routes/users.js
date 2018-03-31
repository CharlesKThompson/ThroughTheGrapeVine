var router = require('express').Router();
var Lists = require('../models/list');
var Users = require('../models/user');
var userWines = require('../models/userWine');

// GET ALL USERS
router.get('/users/users', (req, res, next) => {
    Users.find(req.query)
        .then(users => {
            res.send(users);
        })
        .catch(next);
});

// ADD TO FOLLOWING
router.put('/users/:userId', (req, res, next) => {
    console.log("REQ: ", req);
    Users.findById(req.params.userId)
        .then(user => {
            user.following.push(req.body.userToAdd);
            user.save();
            res.send(user.following);
            console.log("You followed: ", req.body.userToAdd.username);
        })
        .catch(next)
});

// REMOVE FROM FOLLOWING
router.put('/users/:userId/following', (req, res, next) => {
    Users.findById(req.params.userId)
        .then(user => {
            for (var i = 0; i < user.following.length; i++) {
                if (req.body._id == user.following[i]._id) {
                    var unfollowedUser = user.following[i]._id;
                    user.following.splice(i,1);
                    user.save();
                }
            }
            console.log("You unfollowed: ", unfollowedUser)
            res.send(user);
        })
        .catch(next)
});


module.exports = router;