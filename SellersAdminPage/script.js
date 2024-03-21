function handleSubmit(event){
    event.preventDefault();
    //get input data
    let sellingPrice=event.target.sellingPrice.value;
    let productName=event.target.productName.value;
    let category=event.target.category.value;
    // console.log(sellingPrice,productName,category);

    //obj
    let product={
        sellingPrice,
        productName,
        category
    }
    // console.log(product)

    // save it to server 
    axios.post('https://crudcrud.com/api/dd6fc8d381cb457493f1e25e0286dde0/products',product)
    .then((res)=>{
        displayOnScreen(res.data);
        //clearing input fields
        //reset value after submission
       event.target.reset();

    })
    .catch((err)=>console.log(err))
}

//function for dispaly on screen
function displayOnScreen(product){
    console.log(product)
    let productList;
    // Determine which list to append the product to based on its category
    if (product.category === 'electonics') {
        productList = document.getElementById('electonicsItem');
    } else if (product.category === 'food') {
        productList = document.getElementById('foodItem');
    } else if (product.category === 'skincare') {
        productList = document.getElementById('skincareItem');
    }
  console.log('product list ='+productList)

    // Create and append the new product item
    const newItem = document.createElement('li');
    newItem.textContent = `${product.productName} - ${product.sellingPrice}- ${product.category} `;
    
    //create delete button
    let delBtn=document.createElement('button');
    //textContent
    delBtn.textContent='Delete Order'
    
    // onclick
    delBtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/dd9829c307ab4691a3f7dad6f1bcf4d0/products/${product._id}`)
        .then((res) => {
            console.log(res);
            // Remove the product item from the screen after successful deletion
            newItem.remove();
        })
        .catch((err) => console.log(err));
    };
    
    // Append delete button to the new product item
    newItem.appendChild(delBtn);
    productList.appendChild(newItem);
}


// show data when dom loaded
  window.addEventListener('DOMContentLoaded',function(){
    axios.get('https://crudcrud.com/api/dd9829c307ab4691a3f7dad6f1bcf4d0/products')
    .then((response)=>{
        for(var i=0;i<response.data.length;i++){
            displayOnScreen(response.data[i]);
        }
    })
    .catch((err)=>console.log(err))
  })