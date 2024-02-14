// constructor function
function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
}
// instance of objects
const person1=new Person('john','doe','4-03-1980');
console.log(person1);
console.log(person1.dob.getFullYear( 
));