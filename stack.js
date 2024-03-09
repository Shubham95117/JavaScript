class Stack{
    constructor(stack){
        this.stack = stack
    }

    pushIntoStack(value){
        //Complete this function
        //it takes the value and pushes it into the stack
        //this function doesnt return anything
        this.stack.push(value)
    }

    popFromStack(){
        //complete this function 
        // It returns the last element of the stack 
        //if no element present in stack , it should return -1
        return this.stack.length > 0 ? this.stack.pop() : -1;

    }
}

// Do not change anything below this line

function implementStack(arr){
    
    const stack1 = new Stack(arr)
    stack1.pushIntoStack(1)
     console.log(stack1.popFromStack())
     console.log(stack1.popFromStack())
     console.log(stack1.popFromStack())
     stack1.pushIntoStack(1)
     console.log(stack1.popFromStack())
     console.log(stack1.popFromStack())
}