var router = require('express').Router();
var Wines = require('../models/wine');
var Users = require('../models/user');

var sortId = 0;

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
    Wines.create(req.body)
        .then(wine => {
            res.send(wine);
        })
        .catch(next)
});