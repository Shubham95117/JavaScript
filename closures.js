//function along with lexical scope bundeled together forms clousures
// there will be clousure in scope
//ex1
// function x(){
//     var a=7;
//     function y(){
//         console.log(a); 
//     }
//     return y;
// }
// var z=x();
// console.log(z);
// z();

//ex2 same as ex1
// function x(){
//     var a=7;
//     return function y(){
//         console.log(a)
//     }
// }
//  var z=x();
//  z();

//op1 >> returns 100;
// function x(){
//     var a=7;
//     function y(){
//         console.log(a); 
//     }
//     a=100;
//     return y;
// }
// var z=x();
// console.log(z);
// z();

//op2 7 900
// function z(){
//     var b=900;
//     function x(){
//     var a=7;
//     function y(){
//         console.log(a,b); 
//     }
//     y();
// } 
// x();
// }
// z()

//uses- module design pattern,currying,function once,memoize,maintaining state in async world,setTimeouts,iterators

//q1 >10
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     y()
//     }
//     x();

//q2 10
// function x(){
//     let a = 10;
//     function y(){
//     return a;
//     }
//     console.log(y());
//     }
//     x();

//q3 Reference of function y
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
//     }
//     console.log( x());

//q4  10 undefined
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
//     }
//     const z = x()
//     console.log(z());

//q5 50 undefined
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     a= 50;
//     return y;
//     }
//     const z = x()
//     console.log(z());
