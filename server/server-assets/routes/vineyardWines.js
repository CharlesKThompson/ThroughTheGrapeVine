var router = require('express').Router();
var Lists = require('../models/list');
var Users = require('../models/user');
var VineyardWines = require('../models/vineyardWine');

// GET ALL VINEYARD WINES BY LIST ID
router.get('/vineyardwines', (req, res, next) => {
    VineyardWines.find({})
        .then(wines => {
            res.send(wines);
        })
        .catch(next);
});

// ADD A VINEYARD WINE TO A USER LIST
router.post('/vineyardwines', (req, res, next) =>{
    VineyardWines.create(req.body)
        .then(wines => {
            console.log("Created: ", wines)
            res.send(wines);
        })
        .catch(next)
});

module.exports = router;
