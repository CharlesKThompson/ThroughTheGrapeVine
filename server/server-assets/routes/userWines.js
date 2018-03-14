var router = require('express').Router();
var Lists = require('../models/list');
var Users = require('../models/user');
var userWines = require('../models/userWine');

// GET ALL USER WINES BY LIST
router.get('/lists/:listId/wines', (req, res, next) => {
    userWines.find({ listId: req.params.listId })
        .then(wines => {
            res.send(wines);
        })
        .catch(next);
});

// ADD USER WINE TO LIST
router.post('/lists/:listId/wines', (req, res, next) => {
    req.body.listId = req.params.listId;
    req.body.userId = req.session.uid;
    userWines.create(req.body)
        .then(wines => {
            res.send(wines);
        })
        .catch(next)
});

// EDIT WINE BY WINE ID
router.put('/lists/:listId/wines/:wineId', (req, res, next) => {
    userWines.findByIdAndUpdate(
        req.params.wineId,
        req.body,
        { new: true },
        (err, log) => {
            if (err) return res.status(500).send(err);
            return res.send(log);
        })
        .catch(next);
});

// DELETE WINE BY WINE ID
router.delete('/lists/:listId/wines/:wineId', (req, res, next) => {
    userWines.findById(req.params.wineId)
        .then(wines => {
            wines.remove();
            console.log("Wine successfully removed from list!")
            return res.send(wines.listId);
        })
        .catch(next);
});


module.exports = router;