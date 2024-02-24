//window is global object creayed by js engine
//we can accses though window.a,this.a
//lexical -in code execution in call stack --every code execution has lexical memory of parent--global/window reffrence null bcz no parent


//1 
// var a = 2;
// var c = 2;
// function b(){
// var x = 2;
// var c = 4;
// console.log(c)
// }
// console.log(a);
// console.log(this.a);
// console.log(this.c)
// console.log(this.x)
// console.log(window.a)
// console.log(window.x)
// console.log(b());
//op-2 2 2 undefined 2 undefined 4

//2
// function abc() {
//     console.log(a);
//     }
//     var a = 7;
//     abc();
//op- 7

//3
// function abc() {
//     console.log(a);
//     }
//     abc();
//     var a = 7;
//op-undefined

//4
// function outerfunction() {
//     console.log(a);
//     var c = 10;
//     innerfunction();
//     function innerfunction() {
//     console.log(b);
//     console.log(c);
//     }
//     }
//     var a = 7;
//     var b =3;
//     outerfunction();
//op-7 3 10

//5
function outerfunction() {
    console.log(a);
    var a = 10;
    innerfunction();
    function innerfunction() {
    console.log(a);
    console.log(window.a);
    console.log(this.a)
    }
    }
    var a = 7;
    var b =3;
    outerfunction();
//op-undefined 10 7 7 ---- first a hoisted ,then b,then invoke function then in execution for local a is undefined ---*** firstly check in local scope than in global