var router = require('express').Router();
var Lists = require('../models/list');
var Users = require('../models/user');

// GET ALL LISTS BY USER
router.get('/lists', (req, res, next) => {
    // Lists.find({ boardId: req.params.boardId }) // FINDS LISTS BY BOARD ID ?
    Lists.find({userId: req.session.uid})    
    .then(lists => {
            res.send(lists);
        })
    .catch(next);
});

// ADD LIST TO USER
router.post('/lists', (req, res, next) => {
    req.body.userId = req.session.uid; // GIVES LIST USER ID
    Users.findById(req.session.uid)
    .then (user => {
        req.body.user = user.username
        Lists.create(req.body)
        .then(list => {
            res.send(list);
        })
        .catch(next)
    })
});

// EDIT LIST BY USER
router.put('/lists/:listId', (req, res, next) => {
    Lists.findByIdAndUpdate(
        req.params.listId,
        req.body,
        { new: true },
        (err, log) => {
            if (err) return res.status(500).send(err);
            return res.send(log);
        })
        .catch(next);
});

// DELETE LIST BY USER
router.delete('/lists/:listId', (req, res, next) => {
    Lists.findById(req.params.listId)
    .then(list => {
        list.remove();
        return res.send(list.boardId);
    })
    .catch(next);
});


module.exports = router;