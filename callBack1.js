{


///ex 1
// function orderMeal(){
//     console.log('ordered meal');
//     setTimeout(function(){
//         console.log('meal is ready');
//         enjoyingMeal()
//     },2000)
// }
//  function goToplayzone(){
//     console.log('went to play zone')
//  }
//  function enjoyingMeal(){
//     console.log('enjoying meal');
//  }
//  orderMeal();
//  goToplayzone();
 

// q1 
// Write your code here:

function buyBike(callBack){
    setTimeout(()=>{
      console.log('Bought Royal Enfield Himalayan');
      callBack();
    },2000)
  }
  
  function planTrip(){
    setTimeout(()=>{
      console.log('Trip to Ladakh planned')
    },1000)
  }
  
  buyBike(planTrip);

  }