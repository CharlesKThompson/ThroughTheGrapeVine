var router = require('express').Router();
var Lists = require('../models/list');
var Users = require('../models/user');

// GET ALL LISTS BY USER
router.get('/lists', (req, res, next) => {
    // Lists.find({ boardId: req.params.boardId }) // FINDS LISTS BY BOARD ID ?
    Lists.find({ userId: req.session.uid })
        .then(lists => {
            res.send(lists);
        })
        .catch(next);
});

//GET ALL LISTS FOR A SPECIFIC USER
router.get('/friendslists', (req, res, next) => {
    console.log("REQ:", req)
    Users.findById(req.session.uid)
        .then(user => {
            var promises = []
            user.following.forEach(friendId => {
                promises.push(Lists.find({ userId: friendId._id })
                    .then(lists => {
                        return lists
                    })
                    .catch(err => {
                        console.error(err)
                    }))
            });
            Promise.all(promises)
                .then(results => {
                    res.send(results)
                })
        })
        .catch(next)
})

// ADD LIST TO USER
router.post('/lists', (req, res, next) => {
    req.body.userId = req.session.uid; // GIVES LIST USER ID
    Users.findById(req.session.uid)
        .then(user => {
            req.body.user = user.username
            Lists.create(req.body)
                .then(list => {
                    res.send(list);
                })
                .catch(next)
        })
});


// EDIT LIST BY LISTID
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

// DELETE LIST BY LISTID
router.delete('/lists/:listId', (req, res, next) => {
    Lists.findById(req.params.listId)
        .then(list => {
            list.remove();
            res.send("Sucessfully deleted list!")
        })
        .catch(next);
});


module.exports = router;