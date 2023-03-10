// fs module plugin 
const fs = require('fs');

//create a new file
// fs.writeFile('read.txt',"this is asynchronous nodejs",(err)=>{
//     console.log("OMG no error found!!!...");
//     console.log(err);
// });

//now need to add the text to the file then use append function to append
//asynchronous way

// fs.appendFile("read.txt"," my file is added",(err)=>{
//     console.log("Great! you have done this");
// })



//now we are reading the file text and try to print it using async 
// fs.readFile("read.txt",'utf-8',(err,data)=>{
//     if(err){
//         console.log(err,"you are getting error man plz fix it..");
//     }
//     console.log(data);
// })


//what is the different between the synchronous and asynchronous in fs system
//this code is working as sync
// const data = fs.readFileSync("read.txt",'utf-8');
// console.log(data);
// console.log("my name is nothing ");

//now this code is will be working on the asynchronous behavior
const data1 = fs.readFile("read.txt",'utf-8',(err,data1)=>{
    if(err){
        console.log(err);
    }
    console.log(data1);
 });
// console.log(data1);
console.log("this output is in a async ");