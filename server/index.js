var express = require('express');
var bp = require('body-parser');
var cors = require('cors');
var server = express();
var session = require('./server-assets/auth/sessions');
var port = process.env.PORT  || 3000;
require('./server-assets/db/mlab-config');

var authRoutes = require('./server-assets/auth/routes');
var wineRoutes = require('./server-assets/routes/wines');
var whitelist = ['http://localhost:8080']

var corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1
        callback(null, originIsWhitelisted)
    },
    credentials: true
};

server.use(cors(corsOptions));
server.use(session);
server.use(bp.json());
server.use(bp.urlencoded({ extended: true }));

server.use(authRoutes);
server.use(wineRoutes);

// server.use('/api/*', (req, res, next) => { // gateway for all following routes
//     if (req.method.toLowerCase() != 'get' && !req.session.uid) {
//         return res.status(401).send({ error: 'Please log in to continue' })
//     }
//     console.log('you are logged in')
//     next()
// });
// server.use('*', (req, res, next)=>{
//     if(!req.session.uid){
//         return res.status(401).send({error: 'Please Login To Continue'})
//     }
//     next();
// });
server.use('*', (error, req, res, next)=>{
    res.status(400).send(error);
});
server.listen(port, () =>{
    console.log('Server Is Running on port: ', port);
});