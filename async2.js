function checkWeather() {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
      const isSunny = Math.random() > 0.5;
      if (isSunny) {
       resolve("Let us go for picnic");
      } else {
       reject("Error: It is cloudy");
      }
     }, 3000);
    });
   }
   
   
   async function picnicDecision(){
    try{
        const result=await checkWeather();
        console.log(result)

    }
    catch(error){
        console.log(error)
    }
   }
  
   picnicDecision()