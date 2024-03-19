 function orderFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let foodDelivered=Math.random()>0.5;
            if(foodDelivered){
                resolve('Food delivered');
            }
            else{
                reject('Food not delivered')
            }

        },2000)
    })
 }

 function orderDesert(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let desertDelivered=Math.random()>0.5;;
            if(desertDelivered){
                resolve('Desert delivered');
            }
            else{
                reject('Desert not delivered')
            }
        },2000)
    })
 }

 orderFood()
 .then((foodMsg)=>{
    console.log(foodMsg);

  return  orderDesert()
    // .then((desertMsg)=>{
    //     console.log(desertMsg);
    //     console.log('Dream meal fulfilled');
    // })
    // .catch((desertErr)=>{
    //     console.log(desertErr);
    //     console.log('Dream Meal Failed')    
    // })
 })
 .then((desertMsg)=>{
        console.log(desertMsg);
        console.log('Dream meal fulfilled');
    })
 .catch((err)=>{
    console.log(err);
    console.log('Dream Meal Failed')
 })