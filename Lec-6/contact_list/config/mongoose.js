const mongoose = require("mongoose"); //plugin the mongodb

//this the the connection of the mongodb with the database
mongoose.connect("mongodb://localhost/testing");

//need to verify that is that is connected
//connection gives us access to database by db
const db = mongoose.connection;

//error handle showing part
db.on(`Error`, console.error.bind(console, "error connection to db !..."));

//if connection is successfully then it will print the message
db.once(`open`, function () {
	console.log(`Successfully connected the db 😍 😎 ⛳`);
});
