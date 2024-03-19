/*
function boardBusAt10() {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   const busArrivesAt10 = Math.random() > 0.5;
   if (busArrivesAt10) {
    resolve("Board the bus");
   } else {
    reject("Error: Bus is late.");
   }
  }, 3000);
 });
}

boardBusAt10()
 .then((result) => {
  console.log(result);
 })
 .catch((err) => {
  console.log(err);
 });
*/
async function boardingBus(){
    try{
        function boardBusAt10() {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const busArrivesAt10 = Math.random() > 0.5;
                if (busArrivesAt10) {
                  resolve("Board the bus");
                } else {
                  reject("Error: Bus is late");
                }
              }, 3000);
            });
          }
          const result=await boardBusAt10();
          console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
boardingBus()