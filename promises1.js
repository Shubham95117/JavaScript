/*
resolve >>then
reject  >>catch
*/

// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const bookSearch=false;
//         if(bookSearch){
//             resolve('Book found')
//         }
//         else{
//             reject('Book not found')
//         }
//     },3000)
// })
// promise
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

/*
Math.random  any num betn 0 to 1
*/


function bookSearchPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.random() > 0.5;
        if (randomNum) {
          resolve("Book found");
        } else {
          reject("Book not found");
        }
      }, 3000);
    });
  }
  
  // Using the function to get the promise
  bookSearchPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })