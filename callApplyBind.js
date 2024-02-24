
// var obj={
//     num:2
// }

// var addToThis=function(a,b,c,d){
//     return this.num+a+b+c+d;
// }

//call
// console.log(addToThis.call(obj,3,2,1))
// function name.call(obj,funArguments)

//apply 
// let arr=[1,2,3,4];
// console.log(addToThis.apply(obj,arr));

//bind-
// var bound=addToThis.bind(obj);
// // then pass arg 
// console.log(bound(1,2,3,5))
 

//q1 undefined
// var obj = {
//     val: 100
//     }
//     function fun(){
//     console.log(this.val)
//     }
//     fun()

//q2 error
// var obj = {
//     val: 100
//     }
//     function fun(){
//     console.log(this.val)
//     }
//     obj.fun()

//q3 100
// var obj = {
//     val: 100
//     }
//     function fun(){
//     console.log(this.val)
//     } 
//     fun.call(obj)

//q4
// var obj = {
//     val: 100
//     }
//     function fun(a){
//     console.log(this.val + a)
//     }
//     fun.call(obj)

//q5
// var obj = {
//     val: 100
//     }
//     function fun(a){
//     console.log(this.val + a)
//     }
//     fun.call(obj, 3)

//q6
// var obj = {
//     val: 100
//     }
//     function fun(a, b , c){
//     console.log(this.val + a + b + c)
//     }
//     fun.call(obj, 3, 4, 5)

//q7
// var obj = {
//     val: 100
//     }
//     function fun(a, b , c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     }
//     fun.call(obj, [3, 4, 5])

//q8
// var obj = {
//     val: 100
//     }
//     function fun(a, b , c){
//     console.log(this.val + a + b + c)
//     }
//     fun.apply(obj,[ 3, 4, 5])


//q9
var obj = {
    val: 100
    }
    function fun(a, b , c){
    console.log(this.val + a + b + c)
    }
    const fun2 = fun.bind(obj)
    fun2(1, 2,3)
    
    