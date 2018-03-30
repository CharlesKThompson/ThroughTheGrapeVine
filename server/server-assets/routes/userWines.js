var router = require('express').Router();
var Lists = require('../models/list');
var Users = require('../models/user');
var userWines = require('../models/userWine');

// GET ALL USER WINES BY LIST
router.get('/lists/:listId/userwines', (req, res, next) => {
    userWines.find({ listId: req.params.listId })
        .then(uWines => {
            res.send(uWines);
        })
        .catch(next);
});

// ADD USER WINE TO LIST
router.put('/lists/:listId/userwines', (req, res, next) => {
    req.body.listId = req.params.listId;
    req.body.userId = req.session.uid;
    // when you realize your custom wines don't have mlab _id's:
    req.body._id =  Math.floor((Math.random() * 100000000) + 1);
    Lists.findById(req.params.listId)
    .then(list => {
        list.userwines.push(req.body);
        list.save();
        res.send(list);
    }).catch(err => {
        console.log("ERROR: ", err);
    })
});


// EDIT WINE BY WINE ID
// CHANGE PUT ROUTE
// router.put('/lists/:listId/userwines/:wineId', (req, res, next) => {
//     userWines.findByIdAndUpdate(
//         req.params.wineId,
//         req.body,
//         { new: true },
//         (err, log) => {
//             if (err) return res.status(500).send(err);
//             return res.send(log);
//         })
//         .catch(next);
// });

// DELETE WINE BY WINE ID
router.put('/lists/:listId/userwines/:userwineId', (req, res, next) => {
    console.log("DELETED REQ", req);
    Lists.findById(req.params.listId)
        .then(list => {
            for (var i = 0; i < list.userwines.length; i++){
                var uw = list.userwines[i];
                if(uw._id == req.params.userwineId) {
                    list.userwines.splice(i, 1);
                }
            }
            list.save();
            res.send(list);
        }).catch(err => {
            console.log("ERROR: ", err);
        });
});



module.exports = router;