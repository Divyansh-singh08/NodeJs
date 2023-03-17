
// const http = require('http');

// const server = http.createServer((req,res) => {
//     res.end('hello from the other side ');
// });

// server.listen(8000,"127.0.0.1",()=>console.log("working"));

//URL learning
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.end('hello from the other side ');
    }else if(res.url == '/about'){
        res.end('hello from the about ');
    }
    else{
        res.end('noting');
    }
});

server.listen(8000,"127.0.0.1",()=>console.log("working"));