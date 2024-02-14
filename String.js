//string
// tempelate literals 
let myName='shubham';
let age=25;
let address='pune';
console.log(`My name is ${myName} age is ${age} address is ${address}`);
console.log(`personal details = My name is ${myName} age is ${age} address is ${address}`)

// methods
//length uppercase lowercASE
let str='hello!';
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.substring(0));// full string
console.log(str.substring(0,5).toUpperCase());// string from 0 to 4

// split
let str1='namaskar';
console.log(str1.split('')) // split by char
let str2='java,js,c++,c';
console.log(str2.split(',')) // can split by , space 
let str3='hh hh jj hh';
console.log(str3.split(' '))