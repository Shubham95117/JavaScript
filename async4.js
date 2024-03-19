function checkCar() {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
      const carReady = Math.random() > 0.5;
      if (carReady) {
       resolve("Car is ready")
      } else {
       reject("Error: Car needs maintenance");
      }
     }, 2000);
    });
   }
   
   
   
   function packForPicnic() {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
      const itemsPacked = Math.random() > 0.5;
      if (itemsPacked) {
       resolve("Packed everything for picnic");
      } else {
       reject("Error: Not have some essentials");
      }
     }, 1000);
    });
   }

   async function picnicReady() {
   try{
    const result1=await checkCar();
    console.log(result1);

    const result2=await packForPicnic();
    console.log(result2)

   }
   catch(error){
    console.log(error)
   }
  }
   
  picnicReady()
   
   

   