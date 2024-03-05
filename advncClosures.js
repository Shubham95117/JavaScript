//questions
//1 >>> 6 6 6  6 6
// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*100)
//     }
//     console.log('Nmaste js')
// }

//2   1 2 3 4 5
// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*100)
//     }
//     console.log('Nmaste js')
// }

//3  that will print 1 2 3 4 5

// function x(){
//     for(var i=1;i<=5;i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             },i*100)
//         }
//         close();
//     }
// }


//q1   >>Done Coding a
// function y(){
// setTimeout(() => console.log("a"), 1000)
// console.log('Done Coding')
// }
// y();

//q2  >>Done Coding a
// function y(){
//     setTimeout(() => console.log("a"), 0)
//     console.log('Done Coding')
//     }
//     y();

//q3>>>  Done Coding 6 6 6 6 6
// function y(){
    // for(var i=1;i<6;i++){
    // setTimeout(() => console.log(i ), i * 1000)
    // }
    // console.log('Done Coding')
    // }
    // y();

    //q4 >>None of the above
    // function y(){
    //     for(let i=1;i<6;i++){
    //     setTimeout(() => console.log(i ), i * 1000)
    //     }
    //     console.log('Done Coding')
    //     }
    //     y();

    const name = (arr) => {
        let index = 0;
        return () => {
          if (index < arr.length) {
            console.log(`Hello ${arr[index]}`);
            index++;
          } else {
            console.log('No more names in the array.');
          }
        };
      };
      let fun = name(["Ram", "Shyam"]);
      fun(); // Print Hello Ram
      fun(); // Print Hello Shyam