function checkCar(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let isCarReady=Math.random()>0.5;
            if(isCarReady){
                resolve('Car is ready')
            }
            else{
                reject('Error: Car needs maintenance')
            }

        },2000)
    })
}

function packForPicnic(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let isPacked=Math.random()>0.5;
            if(isPacked){
                resolve('Packed everything for picnic')
            }
            else{
                reject('Error: Not have some essentials')
            }

        },1000)
    })
}


checkCar()
.then((result)=>{
    console.log(result);
    return packForPicnic()
})
.then((result)=>{
    console.log(result)
    console.log('"Go for picnic')
})

.catch((error)=>{
    console.log(error);
    console.log('"Picnic cancelled')
})