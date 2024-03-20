function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
        .post(
            "https://crudcrud.com/api/7fb6a9193bc74c82885cf6ad95ff276c/appointmentData",
            userDetails
        )
        .then((response) => {
            console.log(response);
            // Display the user details on the screen
            displayUserOnScreen(response.data);
            // Clearing the input fields
            document.getElementById("username").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
        })
        .catch((error) => console.log(error));
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  

  //for display
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  


   // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    //create edit button
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);   // child to add
  
    // find parent element 
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);

    function deleteUser(userId, userItem) {
        axios.delete(`https://crudcrud.com/api/7fb6a9193bc74c82885cf6ad95ff276c/appointmentData/${userId}`)
            .then((result) => {
                // Remove the user item from the screen
                userItem.remove(); // child to delete
                console.log(result);
            })
            .catch((error) => console.error(error));
    }
    deleteBtn.addEventListener("click", function (event) {
        const userId = userDetails._id; // Assuming _id is the unique identifier for the user
        deleteUser(userId, userItem);
    });
    



    function editUser(userDetails) {
        // Populate input fields with user details for editing
        document.getElementById("username").value = userDetails.username;
        document.getElementById("email").value = userDetails.email;
        document.getElementById("phone").value = userDetails.phone;
    }
    
    // Inside editBtn event listener
    editBtn.addEventListener("click", function (event) {
        deleteUser(userDetails._id,userItem)
        editUser(userDetails);
        // userList.removeChild(event.target.parentElement);
    });
}
  


  //show data when dom loaded
  window.addEventListener('DOMContentLoaded',function(){
    axios.get('https://crudcrud.com/api/7fb6a9193bc74c82885cf6ad95ff276c/appointmentData')
    .then((response)=>{
        for(var i=0;i<response.data.length;i++){
            displayUserOnScreen(response.data[i])
        }
    })
    .catch((err)=>console.log(err))
  })