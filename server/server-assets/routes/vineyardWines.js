var router = require('express').Router();
var Lists = require('../models/list');
var Users = require('../models/user');
var VineyardWines = require('../models/vineyardWine');

// GET ALL VINEYARD WINES
router.get('/vineyardwines', (req, res, next) => {
    VineyardWines.find({})
        .then(wines => {
            res.send(wines);
        })
        .catch(next);
});

// GET ALL VINEYARD WINES ON A LIST
router.get('/lists/:listId/vineyardwines', (req, res, next) => {
    VineyardWines.find({})
        .then(wines => {
            res.send(wines);
        })
        .catch(next);
});

// ADD VW TO LIST BY LISTID
router.put('/lists/:listId/vineyardwines', (req, res, next) => {
    Lists.findById(req.params.listId)
        .then(list => {
            list.vineyardwines.push(req.body);
            list.save();
            res.send(list);
        }).catch(err => {
            console.log("ERROR: ", err);
        })
});

// DELETE VW FROM LIST BY LISTID/VWID
router.put('/lists/:listId/vineyardwines/:vineyardwineId', (req, res, next) => {
    console.log("DELETED REQ", req);
    Lists.findById(req.params.listId)
        .then(list => {
            console.log("LIST: ", list.vineyardwines)
            for (var i = 0; i < list.vineyardwines.length; i++){
                var vw = list.vineyardwines[i];
                if(vw._id == req.params.vineyardwineId) {
                    list.vineyardwines.splice(i, 1);
                }
            }
            list.save();
            res.send(list);
        }).catch(err => {
            console.log("ERROR: ", err);
        });
});


// ADD A VINEYARD WINE TO A USER LIST
// router.post('/vineyardwines', (req, res, next) =>{
//     VineyardWines.create(req.body)
//         .then(wines => {
//             console.log("Created: ", wines)
//             res.send(wines);
//         })
//         .catch(next)
// });

module.exports = router;
