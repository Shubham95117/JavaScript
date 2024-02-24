//1
// console.log('a');
// console.log('b');
// setTimeout(()=> console.log('c'), 1000);
// console.log('d');

//settimeout
// console.log('Hii');
// let c=5;
// setTimeout(()=>{
//     console.log('this is settimeout>>'+ c);

// },1000)
// console.log(c);

//2
// console.log('a');
// console.log('b');
// setTimeout(()=> console.log('c'), 1000);
// setTimeout(()=> console.log('d'), 0);
// console.log('e');

//4
// var arr = [1, 2,3,5];
// var newArr = arr.forEach((item, i ) => {
// console.log(item + 'index' + i)
// return item + i
// })
// console.log(newArr)
 //5 map
//  var arr = [1, 2,3,5]
// var newArr = arr.map((item, i ) => {
// console.log(item + 'index' + i)
// return item + i
// })
// console.log(newArr)

//foreach
// return original array --pass item index
let arr=[1,2,3,4,5];
arr.forEach((item,i)=>{
    console.log(`element =${item} index=${i}`)
});

// map returns new array
console.log('map results');
let arr2=arr.map((item,index)=>{
    console.log(`element =${item} index=${index}`);
    return item*2;
})
console.log(arr2)