// Write your code at relevant places in the code below:
function buyBike() {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Bought Royal Enfield Himalayan');
      },2000)
    })
  }
  
  function planTrip() {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Trip to Ladakh planned');
      },1000)
    })
  }
  
  function reachLadakh() {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Reached Ladakh');
      },1000)
    })
  }
  
  function visitPangongLake() {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Visited Pangong Lake');
      },500)
    })
  }
  buyBike()
  .then((res)=>{
    console.log(res);
    planTrip()
    .then((res)=>{
      console.log(res);
      reachLadakh()
      .then((res)=>{
        console.log(res);
        visitPangongLake()
        .then((res)=>{
          console.log(res)
        })
      })
    })
  })
 
  