/*
Create a function called "learnJavaScript" which prints "JavaScript Learned" after 2 seconds.
Create a function called "learnReact" which prints "React Learned" after 1 seconds.
Make sure that "React Learned" is printed after "JavaScript Learned" because you must know JavaScript first to learn React.
*/

learnJavaScript(learnReact);
function learnJavaScript(){
    setTimeout(()=>{
        console.log('JavaScript Learned')
        learnReact()
    },2000)
}
function learnReact(){
    setTimeout(()=>{
        console.log('React Learned')
    },1000)
}
learnJavaScript(learnReact);