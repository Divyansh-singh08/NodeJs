// const name = "Divyansh Singh";
// console.log(name);

const fs = require("fs");//module plugin

// fs.writeFileSync('read.txt',"Welcome to the Node.js lec-2")

// fs.appendFileSync("read.txt", " now check new data is added or not ");

// fs.readFileSync('read.txt');

//NodeJS has addition data type name as Buffer
//buffer mainly for used to store binary data type
//some time receive packet over the network by buffer binary number

// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);//here we are reading the read.txt file 

// const org_data = buf_data.toString();
// console.log(org_data);


// to rename a file 

fs.renameSync('read.txt','nodeRead.txt');