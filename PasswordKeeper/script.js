function handleSubmit(event){
    event.preventDefault();

    //getting data
    let title=event.target.title.value;
    let password=event.target.password.value;

    //obj
    let passwordDetails={
        title,
        password
    }
    // checking data
    console.log('password object ='+passwordDetails);
    
    // store in server
    axios.post('https://crudcrud.com/api/a43e754c257247e58acd518b58727a34/passwords',passwordDetails)
    .then((res)=>{
        //passing to display function
        displayOnScreen(res.data);
        //reset
        event.target.reset();
    })
    .catch((err)=>{
        console.log('post error'+err)
    })
}



// function for display on screen
function displayOnScreen(passwordDetails) {
    // Getting parent element where we can add data
    let parentEle = document.querySelector('ul');

    // Create child to add 
    let childEle = document.createElement('li');
    childEle.textContent = `${passwordDetails.title}-${passwordDetails.password}`;

    /// Create del button
    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';

    // On click delete event listener
    delBtn.addEventListener("click", function (event) {
        const userId = passwordDetails._id;
        deleteUser(userId, childEle);
    });

    // On click delete handler
    function deleteUser(userId, userItem) {
        axios.delete(`https://crudcrud.com/api/a43e754c257247e58acd518b58727a34/passwords/${userId}`)
        .then((result) => {
            // Remove the user item from the screen
            userItem.remove(); // Child to delete
            updateTotalPasswordsCount();//update count of passwords
            console.log(result);
        })
        .catch((error) => console.error(error));
    }

    
    // Create edit button
    const editBtn = document.createElement("button");
    editBtn.textContent='Edit'
  // Inside editBtn event listener
  editBtn.addEventListener("click", function (event) {
    deleteUser(passwordDetails._id,childEle)
    editUser(passwordDetails);
});

function editUser(passwordDetails) {
    // Populate input fields with user details for editing
    document.getElementById("title").value = passwordDetails.title;
    document.getElementById("password").value = passwordDetails.password;
}

// Append delete and edit to child 
childEle.appendChild(delBtn);
childEle.appendChild(editBtn);
// append child li to parent ul
    parentEle.appendChild(childEle);

    //update count function 
    updateTotalPasswordsCount();
}

function updateTotalPasswordsCount() {
    const totalPasswords = document.getElementById('totalPasswords');
    //using queryselector all 
    const passwordItems = document.querySelectorAll('li');
    totalPasswords.textContent = `Total Passwords: ${passwordItems.length}`;
}
// show data when dom loaded
window.addEventListener('DOMContentLoaded',function(){
    axios.get('https://crudcrud.com/api/a43e754c257247e58acd518b58727a34/passwords')
    .then((response)=>{
        for(var i=0;i<response.data.length;i++){
            displayOnScreen(response.data[i]);
        }
    })
    .catch((err)=>console.log(err))
  })



  // Function to handle search
  function handleSearch(event) {
    const searchText = event.target.value.toLowerCase(); // Get the search text and convert to lowercase for case-insensitive search
    const items = document.querySelectorAll('li'); // Get all the list items
    items.forEach(item => {
        const itemText = item.textContent.toLowerCase(); // Get the text content of each list item and convert to lowercase
        // Show or hide list items based on whether they match the search text
        if (itemText.includes(searchText)) {
            item.style.display = 'block'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
}

// Add event listener for keyup event on window
document.getElementById('search').addEventListener('keyup', handleSearch);
