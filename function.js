// function statement 
// function a (){
//     console.log('a called');
// }

// fun expression
// var b=function (){
//     console.log('b called')
// }

//diff betn those-hoisting

//anonymous function--does not hv own identity-no name
// function (){
        
// }
// ex - where we can use as values
// var b=function (){
//     console.log('b called')
// }


// named function expression
// var b=function x(){
// }
//x() >>> ref error x is created as local variable 
//  var b=function x(){
//     console.log(x);
// }
// b();
// we can access x here as local var

 /// parameter & arguments
//  var b=function(param1,param2){
//     console.log('b called')
//  }
//  b(1,2)  >> arguments

// first class function-ability to pass and return function in functionS 

// var b=function(param1){
//     return function xyz(){

//     };
// }
// console.log(b());

//first class citizen-first class function

//q1
//q1
// a()
// b()
// function a(){
// console.log('inside a');
// }
// var b = function (){
// console.log('inside b');
// }

//q2
// function a(){
//     console.log('inside a');
//     }
//     var b = function abc(){
//     console.log('inside b');
//     }
//     a()
//     abc();

    //q3
    // function fun(a){
    //     console.log(a)
    //     }
    //     var b = 10;
    //     fun(b)


    //curying
/*
Currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument. The result is a chain of functions, each taking a single argument and returning a new function that takes the next argument.
*/
    // function addConstantValue(constant1){
    //     return(value)=>{
    //         return value+constant1;
    //     }
    // }
    // console.log(addConstantValue(5)(4))

    // const functionWithValue=addConstantValue(5);
    // console.log(functionWithValue(4));

 // >>> function anonymous
 // function addConstantValue(constant1){
    //     return(value)=>{
    //         return ()=>value+constant1+value2;
    //     }
    //  }

//  function addConstantValue(constant1){
//     return(value)=>{
//         return (value2)=>value+constant1+value2;
//     }
//  }



//  const functionWithValue=addConstantValue(15);
//  console.log(functionWithValue(2)(5))

//q1  >>> a
function fun1(){
    console.log('a')
    return () => {
    console.log('b')
    }}
    fun1()