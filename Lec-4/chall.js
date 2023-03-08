const fs = require("fs");
//create the file using node js
// fs.mkdirSync('curd');

//now need to create file in it using node js
// fs.writeFileSync('curd/bio.txt',"my name is differ then all its");

//now i do not do over ride to the file
// fs.appendFileSync('curd/bio.txt'," value and money i love to create great model ");

//now we have to deal with Buffer data type and encode it
// const _data = fs.readFileSync("curd/bio.txt", "utf-8");
// console.log(_data);

// rename the file
// fs.renameSync('curd/bio.txt', 'curd/info.txt');

//now need to delete the nodejs file using fs
// fs.unlinkSync('curd/info.txt');

//now need to delete the folder using fs nodejs file
fs.rmdirSync("curd");
