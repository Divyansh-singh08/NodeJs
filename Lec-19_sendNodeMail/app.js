const express = require('express');

const app = express();

let PORT = 5000 || process.env.PORT;

//need to require the controller

const sendMail = require('./controllers/sendMail');

app.get('/',(req,res)=>{
    res.send('I am back to the world');    
})


//need to create a root 
//root goes the work to the controller sendMail
app.get("/sendEmail",sendMail);



const Start = async () => {
    try{
        app.listen(PORT,()=>{
            console.log(`I am good to go...${PORT}`);
        })
    }catch(error){
        console.log(error);
    }
}

Start();//which start the server