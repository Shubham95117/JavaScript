const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios.get('https://crudcrud.com/api/f2d045c66a7f45d3b5d8b72ed17a8ed0/todo')
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err))
}

function postTodo() {
  axios.post('https://crudcrud.com/api/f2d045c66a7f45d3b5d8b72ed17a8ed0/todo',{
    title:'Join Gym',
    completed:'false'
  })
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
}

function putTodo() {
  axios.put('https://crudcrud.com/api/f2d045c66a7f45d3b5d8b72ed17a8ed0/todo/65f9199e1492af03e8f0ead5', {
    "title": "Join Tution",
    "completed": "true"
})
.then(res=>console.log(res))
  .catch(err=>console.log(err))
}

function deleteTodo() {
  // Write your code here
}
