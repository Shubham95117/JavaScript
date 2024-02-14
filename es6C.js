class Student {
    constructor(firstName, lastName , rollNumber , age) {
        //complete this function to initialize the object
        this.firstName=firstName;
        this.lastName=lastName;
        this.rollNumber=rollNumber;
        this.age=age;
    }
    
    printFullName() {
        //complete this function to print the full Name of the student object invoking the method;
        console.log(`${this.firstName}${this.lastName}`)

    }
    
    minorOrMajor(){
        if(this.age>18){
            console.log('Major');
        }
        else{
            console.log('Minor');
        }
       //If age greater than 18 print Major
       //if age less than 18 print Minor
       //Complete this function
    }
}
function createNewStudents(){
    //create 2 object Yash and Ram with initial values as mentioned in question
    let student1=new Student('yash', 'prasad', 12, 27);
    let student2=new Student('ram', 'prasad', 14, 15)


    //Print yash's full name by invoking printFullName()   
    student1.printFullName();
    

    //Print whether yash is minor or major by invoking minorOrMajor function
    student1.minorOrMajor();
   

   //Print Rams's full name by invoking printFullName()  
    student2.printFullName();

    //Print whether Ram is minor or major by invoking minorOrMajor function
    student2.minorOrMajor();
}