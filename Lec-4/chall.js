const fs = require("fs");
//create the file using node js
// fs.mkdirSync('curd');
// fs.mkdirSync('newFile');//this will make folder

//now need to create file in it using node js
// fs.writeFileSync('curd/bio.txt',"my name is differ then all its");

// fs.writeFileSync('newFile/story.txt',"In this i am writing about the Node js");

//now i do not do over ride to the file
// fs.appendFileSync('curd/bio.txt'," value and money i love to create great model ");
//now i need to add some text into it
// fs.appendFileSync('newFile/story.txt'," I am adding new txt to you by just using the appendFileSync ");

//now we have to deal with Buffer data type and encode it
// const _data = fs.readFileSync("curd/bio.txt", "utf-8");
// console.log(_data);

// rename the file
// fs.renameSync('curd/bio.txt', 'curd/info.txt');

//DELETE using fs modules in node js

//now need to delete the nodejs file using fs
// fs.unlinkSync('curd/info.txt');
// fs.unlinkSync('newFile/story.txt');

//now need to delete the folder using fs nodejs file
// fs.rmdirSync("curd");
// fs.rmdirSync("newFile");
