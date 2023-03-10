const fs = require("fs"); //module plugin

//challenge time

//using Asynchronous
// Apply CRUDE  operation
//Create folder name
//create a file in it named bio.txt and data in it
//Add more data into the file at the end of the file data
//Read the data without getting  the buffer data
//Rename the file name  to my_bio.txt
//now delete the both the file and the folder

//step-1 done
// fs.mkdir('newFile',(err)=>{
//     if(err){
//         console.log(err,'plz correct your error');
//     }
//     console.log('file is created');
// });

// step-2
// fs.writeFile('newFile/text.txt',"This text file content async data in it plz be aware of it...",(err)=>{
//     console.log(err);
// })

//step-3
//adding more data to the text.file at the end of its content

// fs.appendFile('newFile/text.txt'," this is the data which attach/or append to it",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// step-4
//read data without the buffer
// fs.readFile('newFile/text.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err,'error is this one');
//     }
//     console.log(data);
// })

//step-5
// fs.rename("newFile/text.txt", "newFile/myBio.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
// });


// step-6 
// delete both file and folder 
//delete the myBio.txt 
// fs.unlink("newFile/myBio.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
// });

//now delete the folder
fs.rmdir("newFile",(err)=>{
    if(err){
        console.log(err);
    }
})