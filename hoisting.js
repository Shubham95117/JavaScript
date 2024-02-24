// console.log(x);// return undefined  for var only 
// getName();// return result    for normal function
// // print()//  treat as variable---- error---undefined in memory
// console.log(print)
// var x=2;

// function getName(){
//     console.log('namaste js')
// }

// var print=()=>{
//     console.log('shubh')
// }

//1
// var a = 3;
// function printName(name){
// console.log(name)
// }
// printName("YAVTECH");
// console.log(a);
// YAVTECH 3


//2
// printName("YAVTECH");
// console.log(a);
// var a = 3;
// function printName(name){
// console.log(name)
// }
//yavtech undefined

//3
// console.log(printName);
// console.log(a);
// var a = 3;
// var printName = (name) => {
// console.log(name);
// }
// undefined undefined

//4
console.log(printName);
console.log(a);
var a = 3;
var printName = function (name) {
console.log(name);
}
//undefined undefined