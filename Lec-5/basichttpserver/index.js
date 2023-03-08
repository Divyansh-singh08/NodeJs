//configuration of the server has done through the package.json file

const http = require("http");
//this is the port that every website has unique id by default it is 80
const port = 8000;
//to read index.html
//reading and writing for the file
const fs = require("fs");

//loading is going on so to fix this issue
//we need to deal with return handler
function requestHandler(req, res) {
	console.log(req.url);
	//take or render the html to the server
	res.writeHead(200, { "content-type": "text/html" });
	//this is the read file system
	// fs.readFile('./index.html',function(err,data){
	//     if(err){
	//         console.log('error: ',err);
	//         return res.end('<h1>Error!</h1>');
	//     }
	//     return res.end(data);
	// });

	//    res.end('<h1>Gotcha!</h1>')
	//rend
	let filePath;

	switch (req.url) {
		case "/":
			filePath = "./index.html";
			break;
		case "/profile":
			filePath = "./profile.html";
			break;
		default:
			filePath = "./404.html";
	}

	fs.readFile(filePath, function (err, data) {
		if (err) {
			console.log(err);
			return res.end("<h1>Error!</h1>");
		}
		return res.end(data);//this will return to the requestHandler function to whom it call
	});
}

//run our server ...created the server
const server = http.createServer(requestHandler);

//now to know the server is active or not we check like this
server.listen(port, function (err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Server is working in the write port ", port);
});
