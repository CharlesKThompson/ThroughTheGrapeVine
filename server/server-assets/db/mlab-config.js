var mongoose = require("mongoose");
var connectionString = "mongodb://wine:wine@ds213209.mlab.com:13209/wines"
// var connectionString = "mongodb://wine:wine@ds213209.mlab.com:13209/wines";
var connection = mongoose.connection;

mongoose.connect(connectionString);

connection.on("error", err => {
 console.error("mlab Error: ", err);
});

connection.once("open", () => {
 console.log("connected to MLAB");
});