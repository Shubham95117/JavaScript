function buyBike(planTrip,reachLadakh,visitLake){
    setTimeout(()=>{
        console.log('Bought Royal Enfield Himalayan');
        planTrip(reachLadakh,visitLake)
    },2000)

}

function planTrip(reachLadakh){
    setTimeout(()=>{
        console.log('Trip to ladakh planned');
        reachLadakh(visitLake)
    },1000);
}

function reachLadakh(visitLake){
    setTimeout(()=>{
        console.log('reached ladakh');
        visitLake();
    },1000);
}

function visitLake(){
    setTimeout(()=>{
        console.log('Visit pangaon lake')
    },500)
}
buyBike(planTrip,reachLadakh,visitLake);


// as we increase functions code will be dificult to read and maintain-- this is callBack hell

