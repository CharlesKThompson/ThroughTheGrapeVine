var router = require('express').Router();
var Lists = require('../models/list');
var Comments = require('../models/comment');
var Users = require('../models/user');
var userWines = require('../models/userWine');
var VineyardWines = require('../models/lightwine');

// region VINEYARDWINE COMMENTS
// GET ALL COMMENTS BY USER WINE
router.get('/lists/:listId/vineyardwines/:wineId/comments', (req, res, next) => {
    Comments.find({wineId: req.params.wineId }) 
        .then(comments => {
            res.send(comments);
        })
        .catch(next);
});

// ADD COMMENT TO USER WINE
router.post('/lists/:listId/vineyardwines/:wineId/comments', (req, res, next) => {
    req.body.listId = req.params.listId;
    req.body.userId = req.session.uid;
    req.body.wineId = req.params.wineId;
    Comments.create(req.body)
        .then(comment => {
            res.send(comment);
        })
        .catch(next)
});

// EDIT COMMENT BY COMMENT ID
router.put('/lists/:listId/vineyardwines/:wineId/comments/:commentId', (req, res, next) => {
    Comments.findByIdAndUpdate(
        req.params.commentId,
        req.body,
        { new: true },
        (err, log) => {
            if (err) return res.status(500).send(err);
            return res.send(log);
        })
        .catch(next);
});

// DELETE COMMENT BY COMMENT ID
router.delete('/lists/:listId/vineyardwines/:wineId/comments/:commentId', (req, res, next) => {
    Comments.findById(req.params.commentId)
    .then(comments => {
        comments.remove();
        return console.log("Comment on vineyard wine successfully deleted!");
    })
    .catch(next);
});

// endregion VINEYARDWINE COMMENTS

// region USERWINE COMMENTS
router.get('/lists/:listId/userwines/:wineId/comments', (req, res, next) => {
    Comments.find({wineId: req.params.wineId }) 
        .then(comments => {
            res.send(comments);
        })
        .catch(next);
});

// ADD COMMENT TO USER WINE
router.post('/lists/:listId/userwines/:wineId/comments', (req, res, next) => {
    req.body.listId = req.params.listId;
    req.body.userId = req.session.uid;
    req.body.wineId = req.params.wineId;
    Comments.create(req.body)
        .then(comment => {
            res.send(comment);
        })
        .catch(next)
});

// EDIT COMMENT BY COMMENT ID
router.put('/lists/:listId/userwines/:wineId/comments/:commentId', (req, res, next) => {
    Comments.findByIdAndUpdate(
        req.params.commentId,
        req.body,
        { new: true },
        (err, log) => {
            if (err) return res.status(500).send(err);
            return res.send(log);
        })
        .catch(next);
});

// DELETE COMMENT BY COMMENT ID
router.delete('/lists/:listId/userwines/:wineId/comments/:commentId', (req, res, next) => {
    Comments.findById(req.params.commentId)
    .then(comments => {
        comments.remove();
        return console.log("Comment on user wine successfully deleted!");
    })
    .catch(next);
});

// endregion USERWINE COMMENTS

module.exports = router;