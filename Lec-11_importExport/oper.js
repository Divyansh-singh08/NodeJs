//parameter need to accept
const add = (a,b)=>{
    // console.log(a+b);
    return a+b;
}

const sub = (a,b)=>{
    // console.log(a+b);
    return a-b;
}

const multi = (a,b)=>{
    return a*b;
}

// const name = 'Divyansh Singh'
//export  the file path

// module.exports = add;//export the file//now it is public//single file can export
// module.exports.name = name; 
// module.exports = sub;//this is wrong bcz multiple file can export like this

//this type will help in returning in object {key : pair}
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.multi = multi;

// above one need to do repative work so we use ES6 method 
// module.exports = {add,sub,multi};