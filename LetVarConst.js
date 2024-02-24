//let const also hoisted but they in tdz-temepral dead zone
// bt after printing it will give error

// let,const-alocated memory but in seperate memory space-script 
// console.log(a);
//  let a=10;
//  console.log(object)
//  var b=100;
// temperal dead zone- time brtween let const hoisted and upto assign value- we cant access in tdz
// cant access through window object
// cant redeclare let-syntax error-no 1 line of code also run

//const
// cant redeclare also update 
// same hoisting as let
//cant initialize only- u hv to assign values >>> const a=10   othervise syntax error;
//type error-when update const
//reffrence error- access bfr initilization -tdz  && not defined -reff error

//1
// console.log(a);
// console.log(b);
// let a =5;
// var b =6;
// console.log(b);

//2
// console.log(a);
// var a = 5;
// console.log(b) //we havent initialized b, Guess the output

//4
// let a = 5;
// var b = 6;
// console.log(this.b);
// console.log(window.b)
// console.log(window.a)
// console.log(this.a);

//5
// let a =5;
// let a = 6;


//6
// let a =6;
// const b;
// b=100;
