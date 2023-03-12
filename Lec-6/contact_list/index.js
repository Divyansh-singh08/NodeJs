const express = require("express");

//
const path = require("path"); //this is inbuilt in nodejs
const port = 8000;

//we need to fire express to get all the functionality of express we call express()
const app = express(); //and all method were store in app

//now let set the static file concept
app.use(express.static("assets"));

//how to setup the ejs template
//1 first i need to tell the express js that  we use ejs template
//setting the value for the property
app.set("view engine", "ejs");
//where it goes so we choice a directory
app.set("views", path.join(__dirname, "views")); //this will be dynamic any team-member use it good to go

//for reading the parse encoded data
//use signified middleware
app.use(express.urlencoded());

// //middleware1
// app.use((req,res,next)=>{
// 	//change some data
// 	 req.myName = 'Dohi';
// 	//next call next middleware and pass the change which has done
// 	console.log('middleware 1 is called ');
// 	next();//this will go to the next line or next controller
// });

// // middleware 2
// app.use((req,res,next)=>{
// 	//data which is in  middleware 1 print here
// 	console.log('my Name form MW2',req.myName)
// 	console.log('middleware 2 called');
// 	next();
// })

//Creating the form page
var contactList = [
	{
		name: "Divyansh",
		phone: "89756046",
	},
	{
		name: "Tony",
		phone: "123",
	},
	{
		name: "Monk Code",
		phone: "1223435",
	},
];

// "/" is the router and function(req,res) is the controller
app.get("/", function (req, res) {
	//MW1 data
	// console.log('to the get controller',req.myName);

	// console.log(req);
	// console.log(__dirname); //this will display the dir where where the server start

	// res.send(`<h1>It is running is it cool .. ?</h1>`);

	// return res.render('home');
	//want to make title of the page dynamic
	// console.log(req);//return true as get
	return res.render("home", {
		title: "home",
		contact_list: contactList,
	});
});

//create another controller for this
app.get("/create-contact", function (req, res) {
	return res.render("practise", {
		title: "playGame",
		// contact_list:contactList
	});
});

//form submit and click then data come here
///create-contact this must be pass to the in form action class
app.post("/create-contact", (req, res) => {
	//this help in redirect to practice page
	// return res.redirect('/practise');
	// console.log(req);//return true as post
	// console.log(req.body);//we use this bcz we use encoded
	// console.log(req.body.name);
	// console.log(req.body.phone);
	//need to append in the contactList:
	// contactList.push({
	// 	name:req.body.name,
	// 	phone:req.body.phone
	// });

	contactList.push(req.body); //do same thing just code reduce
	// return res.redirect('/');
	return res.redirect("back");
});

// //delete the contact list by params
// app.get("/delete-button/:phone", (req, res) => {
// 	console.log(req.params);
// 	//find the contact
// 	let phone = req.params.phone;
// });

//delete the contact list by query
app.get("/delete-button/", (req, res) => {
	console.log(req.query.phone);
	// console.log(req.query.name);
	//get the query from the url
	let phone = req.query.phone;

	//iterate over the list by using findIndex
	let contactIndex = contactList.findIndex((contact) => contact.phone == phone);

	//delete function is here
	if (contactIndex != -1) {
		contactList.splice(contactIndex, 1);
	}

	// redirect at same page
	return res.redirect("back");
});

//need to check is express function is working
app.listen(port, (err) => {
	if (err) {
		console.log("Error in running the server", err);
	}
	console.log("Happy feel by express server", port);
});
