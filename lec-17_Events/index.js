
const EventEmitter = require('events');//creating the class now like this

const event = new EventEmitter();//now object is created 

//now we can create our own event and fire them easily

event.on('sayMyName',()=>{
    console.log(`your name is nothing`);
})

// event.emit('sayMyName');//called your own event by emit using


//create an event emitter  instance and registers a couple  of callback functions
event.on('sayMyName',()=>{
    console.log(`your name is books`);
})

event.on('sayMyName',()=>{
    console.log(`your name is home`);
});


event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});




event.emit('checkPage',200,'ok');//called your own event by emit using
