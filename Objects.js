// objects
//key value
let person={
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main st',
        city:'boston',
        state:'ma'
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.hobbies);
console.log(person.hobbies[2]);
console.log(person.address.city);


//destructuring
const {firstName,lastName,address:{city,state}}=person;
console.log(firstName);
console.log(city,state);

// we can assign also
person.email='john@mail.com';
console.log(person);

///arrays of objects

let todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted:false
    },
]
console.log(todos[1].text);

//json  'keys' and string ""  convert json
let todoJSON=JSON.stringify(todos);
console.log(todoJSON);

//for
for(let i=0;i<todos.length;i++){
    console.log(todos[i].text);
}
//foreach,map,filter
// 1 function callback
todos.forEach(function(todo){
    console.log(todo.text);
})
//2 arrow function
todos.forEach((todo)=>{
    console.log(todo.text);
})

//map-return new arr
let a=todos.map((x)=>{
    return x.text;
})
console.log(a);

//filter
let b=todos.filter((x)=>{
    return x.id==1;
})
console.log(b);