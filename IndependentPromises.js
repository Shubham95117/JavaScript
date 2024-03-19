const amanPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let amanP=true;
        if(amanP){
            resolve('Aman pay back')
        }
        else{
            reject('Aman dint pay back')
        }

    },3000)
})

const piyushPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        piyushP=true;
        if(piyushP){
            resolve('piyush pay back')
        }
        else{
            reject('piyush dint pay back')
        }

    },1000)
})

const riteshPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        riteshP=false;
        if(riteshP){
            resolve('ritesh pay back')
        }
        else{
            reject('ritesh dint pay back')
        }

    },2000)
})
//1
// amanPromise
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

// piyushPromise
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

// riteshPromise
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

//using independent if any promise fails to resolve then only print that

Promise.all([amanPromise,riteshPromise,piyushPromise])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

