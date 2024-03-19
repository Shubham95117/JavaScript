function concertPassPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.random()>0.5;
        if (randomNum ) {
          resolve("Pass received");
        } else {
          reject("Pass not received");
        }
      }, 3000);
    });
  }
  
  // Using the concertPassPromise function
  concertPassPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });