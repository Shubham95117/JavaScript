function handleSubmit(event){
    event.preventDefault();
    //getting data
    let expAmt=event.target.expenseAmt.value;
    let exDesc=event.target.expenseDesc.value;
    let exCatg=event.target.expenseCat.value;

      //creating obj
      let obj={
        expAmt,
        exDesc,
        exCatg
      }

       // Store user object in local storage
       localStorage.setItem(obj.exCatg, JSON.stringify(obj));

       //display on screen
       displayList(obj);

       //reste value after submission
       event.target.reset();
}

//function for display
function displayList(obj){
    //get parent element 
    let parentElement=document.querySelector('ul');
    //create child element
    let childElement=document.createElement('li');
    //text content
    childElement.textContent=`${obj.expAmt}-${obj.exCatg}-${obj.exDesc} `;

    //create delete button
    let delBtn=document.createElement('button');
    // value
    delBtn.textContent='Delete Expense';

    //onclick function to delete data
    delBtn.onclick=function(){
        //delete from local
        localStorage.removeItem(obj.exCatg);
        //delete from screen
        parentElement.removeChild(childElement);
    }


    //create edit btn
    let editBtn=document.createElement('button');
    editBtn.textContent='Edit Expense';
    //onclick on edit to edit data
    editBtn.onclick=()=>{
        //remove from screen and local storage
        localStorage.removeItem(obj.exCatg);
        parentElement.removeChild(childElement);

        //populate on input form again
          document.getElementById('expenseAmt').value = obj.expAmt;
          document.getElementById('expenseDesc').value = obj.exDesc;
          document.getElementById('expenseCat').value = obj.exCatg;

    }
     // add delete and edit to child
     childElement.appendChild(delBtn);
     childElement.appendChild(document.createTextNode(' '));  // Adding space
     childElement.appendChild(editBtn);
    //add child to parent
    parentElement.appendChild(childElement);

}