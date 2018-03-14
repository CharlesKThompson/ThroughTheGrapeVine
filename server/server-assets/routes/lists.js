var router = require('express').Router();
var Lists = require('../models/list');

// GET ALL LISTS BY USER
router.get('/api/lists', (req, res, next) => {
    Lists.find({ boardId: req.params.boardId }) // FINDS LISTS BY BOARD ID ?
        .then(lists => {
            res.send(lists);
        })
        .catch(next);
});

// ADD LIST TO USER
router.post('/api/lists', (req, res, next) => {
    req.body.boardId = req.params.theboardId;
    // req.body.name = req.params.nam
    Lists.create(req.body)
        .then(list => {
            res.send(list);
        })
        .catch(next)
});

// EDIT LIST BY USER
router.put('/api/lists/:listId', (req, res, next) => {
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
router.delete('/api/lists/:listId', (req, res, next) => {
    Lists.findById(req.params.listId)
    .then(list => {
        list.remove();
        return res.send(list.boardId);
    })
    .catch(next);
});


module.exports = router;