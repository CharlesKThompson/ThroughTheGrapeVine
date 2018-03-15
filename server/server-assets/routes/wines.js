var router = require('express').Router();
var Wines = require('../models/wine');
// var Users = require('../models/user');

// These are for admin users only (upcoming feature)
// GET ALL WINES
router.get('/api/wines', (req, res, next) => {
    Wines.find()
        .then(wines => {
            res.send(wines);
        })
        .catch(next);
});

// ADD A NEW WINE
router.post('/api/wines', (req, res, next) => {
    console.log(req)
    Wines.create(req.body)
        .then(wine => {
            res.send(wine);
        })
        .catch(next)
});

module.exports = router;