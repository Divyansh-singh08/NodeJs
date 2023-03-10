//import all in single variable by using ES6 Destructure obj
const {add,sub,multi} = require('./oper');
console.log(add(5,45));//argument is passed
console.log(sub(30,15));//sub
console.log(multi(12,56));//multi output    


//this is helping in importing by the require and need to give the path
// const oper = require('./oper');
// // console.log(oper);
// console.log(oper.add(5,45));//argument is passed
// console.log(oper.sub(30,15));//sub





// //now we use ES6 Destructure
//  const number = [10,30,45];
//  const [a,b,c] = number;//a=10 b=30 c=45

//  //now we can do for object to
//  const obj = {name:'ravi',age:'34'};
//  const {name,age} = obj;
//  console.log(name);//ravi
//  console.log(age);//34

//  //array in object destructure include
//  const alsate = [
//     {isname:'dhoni',age:'60'},
//     {isname:'fan',age:'23'}
//  ];

//  const [firstname] = alsate;
//  console.log(firstname);//{isname:'dhoni',age:'60'}
//  const [{isname}] = alsate;
//  console.log(isname);
