var expressSession = require("express-session")
var mongoStore = require("connect-mongodb-session")(expressSession)

// THIS IS WHERE SESSIONS ARE BEING HELD WITHIN SERVER
var store = new mongoStore({
   uri: "mongodb://wine:wine@ds213209.mlab.com:13209/wines",
   collection: "Sessions"
});

// IF THERE IS AN ERROR GETTING THE SESSION
store.on("error", function(err) {
   console.log("[SESSION ERROR]", err);
})

// SESSION CONSTRUCTOR/GUIDELINE
var session = expressSession({
    secret: "this is a new secret",
    cookie: {
       maxAge: (1000 * 60 * 60 * 24 * 7) * 52 // HOW LONG UNTIL NEED TO RE-LOGIN
   },
   store, // PUTTING ON MONGO SERVER VIA URI
   resave: true,
   saveUninitialized: true

})

module.exports = session;