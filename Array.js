//Array
let number=new Array(1,2,3,4,5);
console.log(number);
let fruit=['apple',true,3];
console.log(fruit);
console.log(fruit[0]);
//methods
// push-add elem at end 
fruit.push('banana');
console.log(fruit)
//pop-remove from end
console.log(fruit.pop());
// unshift-add at first 
fruit.unshift('mango');
console.log(fruit);
//shift delete first
fruit.shift();
console.log(fruit);

// 
console.log(Array.isArray(fruit));
console.log(fruit.indexOf(true))