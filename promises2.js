function loanSanctionPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.random()>0.5;
        if (randomNum) {
          resolve("Loan sanctioned");
        } else {
          reject("Loan not sanctioned");
        }
      }, 3000);
    });
  }
  
  // Using the loanSanctionPromise function
  loanSanctionPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  