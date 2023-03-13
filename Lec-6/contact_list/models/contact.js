const mongoose = require('mongoose');



//need to create schema
const contactSchema = new  mongoose.Schema({
    //make schema
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

//now need to name the collection 
const Contact = mongoose.model('Contact',contactSchema);

//need to export the file 
module.exports = Contact;