/*
Create a function called "writeLetter" which prints "Wrote Letter" after 2 seconds.
Create a function called "postLetter" which prints "Letter Posted" after 1 seconds.
Make sure that "Letter Posted" is printed after "Wrote Letter" because obviously you will post letter only after you write it.
*/


    function writeLetter(postLetter){
        setTimeout(()=>{
          console.log('Wrote Letter');
          postLetter();
        },2000)
      }
      
      function postLetter(){
        setTimeout(()=>{
          console.log('Letter Posted')
        },1000)
      }
      
      writeLetter(postLetter);