/*
resolve >>then
reject  >>catch
*/


/*
Math.random  any num betn 0 to 1
*/


// function bookSearchPromise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const randomNum = Math.random() > 0.5;
//         if (randomNum) {
//           resolve("Book found");
//         } else {
//           reject("Book not found");
//         }
//       }, 3000);
//     });
//   }
  
//   // Using the function to get the promise
//   bookSearchPromise()
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     })


const promise=new Promise((resolve,reject)=>{
setTimeout(()=>{
  const bookSearch=false;
  if(bookSearch){
    resolve('Book found')
  }
  else{
    reject('Book not found')
  }
},3000)
})

promise
.then((result)=>{
  console.log(result)
})
.catch((error)=>{
  console.log(error)
})