//block scope and shadowing

// block  -compounding/group multiple code in block so where js expects one statement
// ex 

//  block scope-what are variables we use inside block-- in console-scope -let,const-in block--var-global
// {
//     var a=10;
//     let b=20;
//     const c=30;
// }
// we cant acsess let const outside of this block but var can
// console.log(a)
// console.log(b)
// console.log(c)

//shadowing
// var-- var global scoped -refrencing same memory so var a=10 shadowing var a=100  so a==10 updated
// var a=100;
// {
//     var a=10;
//     console.log(a);
// }
// console.log(a)
//const/let-let a=100--//script let a=10--block two diff memory location
// let a=100;
// {
//     let a=10;
//     console.log(a)
// }
// console.log(a)

//**** */ same works in function 

//illegal shadowing
//1 - give syntax error a -declared allready
// let a=10;
// {
//     var a=10;
// }

//2 we can
// let a=10;
// {
//     let a=100;
// }

//3 we cant
// var a=20;
// {
//     let a=50;
// }

// var is function scope
//4 we can-here var are function scope but above was global scope bcz var is not block scope
// let a=10;
// function x(){
//     var a=100;
// }
//block has also lexicl  
// const a=20;
// {
//     const a=100;// if 100 is not there 20 wll print
//     {
//         const a=200;// here nearest a will print
//         console.log(a)
//     }
//     console.log(a)// here 100 
// }

// scope for normal and arrow same
//q1
// var a = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// }
// console.log(a)
//q2>> error allready declared
// const a = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// }
// console.log(a)
//q3>error a-allready declared
// let a = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// }
// console.log(a)
//q4> 50
// var a = 50;
// function fun(){
// var a =30;
// let b = 20;
// let c = 30;
// }
// fun();
// console.log(a)
//q5>50
// let a = 50;
// function fun(){
// var a =30;
// let b = 20;
// let c = 30;
// }
// fun();
// console.log(a)
//q6>error
// const a = 10;
// {
// var a = 100;
// }
// console.log(a)

//q7>50 20 10
// const a = 10;
// {
// const a = 20;
// {
// const a = 50;
// console.log(a);
// }
// console.log(a)
// }
// console.log(a)
//q8>20 20 10
// const a = 10;
// {
// const a = 20;
// {
// console.log(a);
// }
// console.log(a)
// }
// console.log(a)

