var router = require('express').Router();
var Lists = require('../models/list');
var Comments = require('../models/comment');

// GET ALL COMMENTS BY LIST
router.get('/api/lists/:listId/comments', (req, res, next) => {
    Comments.find({ boardId: req.params.boardId }) // FINDS LISTS BY BOARDId
        .then(comments => {
            res.send(comments);
        })
        .catch(next);
});

// ADD COMMENT TO LIST
router.post('/api/lists/:listId/comments', (req, res, next) => {
    req.body.boardId = req.params.theboardId;
    // req.body.name = req.params.nam
    Comments.create(req.body)
        .then(comment => {
            res.send(comment);
        })
        .catch(next)
});

// EDIT COMMENT BY COMMENT ID
router.put('/api/lists/:listId/comments/:commentId', (req, res, next) => {
    Comments.findByIdAndUpdate(
        req.params.listId,
        req.body,
        { new: true },
        (err, log) => {
            if (err) return res.status(500).send(err);
            return res.send(log);
        })
        .catch(next);
});

// DELETE COMMENT BY COMMENT ID
router.delete('/api/lists/:listId/comments/:commentId', (req, res, next) => {
    Comments.findById(req.params.listId)
    .then(comment => {
        comment.remove();
        return res.send(comment.boardId);
    })
    .catch(next);
});


module.exports = router;