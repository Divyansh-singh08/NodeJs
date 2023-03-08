const express = require("express");
//
const path = require("path"); //this is inbuilt in nodejs
const port = 8000;

//we need to fire express to get all the functionality of express we call express()
const app = express();

//how to setup the ejs template
//1 first i need to tell the express js that  we use ejs template
//setting the value for the property
app.set("view engine", "ejs");
//where it goes so we choice a directory
app.set("views", path.join(__dirname, "views")); //this will be dynamic any team-member use it good to go

app.get("/", function (req, res) {
	// console.log(req);
	// console.log(__dirname); //this will display the dir where where the server start

	// res.send(`<h1>It is running is it cool .. ?</h1>`);

	// return res.render('home');
	//want to make title of the page dynamic
	return res.render("home", { title: "home" });
});

//create another controller for this
app.get("/practise", function (req, res) {
	return res.render("practise", { title: "playGame" });
});

app.listen(port, (err) => {
	if (err) {
		console.log("Error in running the server", err);
	}
	console.log("Happy feel by express server", port);
});
