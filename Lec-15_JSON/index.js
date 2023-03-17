const fs = require('fs');

//JSON study

const bioData = {
	name: "Dm",
	age: 34,
	coder: "monkCoder",
};

// console.log(bioData);

//now if we want to convert the Object to the JSON file,
//then use stringify
const jsonData = JSON.stringify(bioData);
// console.log(jsonData," json formate ");


//now if we want to convert the json to the object file
//then we use parse funtion
// const obData = JSON.parse(jsonData);
// console.log(obData," object formate");

//convert obj to JSON
//add it into another file
//readfile
//again convert JSON into object
//show output

// const jsonData = JSON.stringify(obData);

fs.writeFile('json1.json',jsonData,(err)=>{
    console.log(err);
})

fs.readFile('json1.json','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    const objData2 = JSON.parse(data);
    console.log(data);
    console.log(objData2);
});