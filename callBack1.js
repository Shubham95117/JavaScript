//fun passes as an arg to other func



//1
// function buyBike() {
//     setTimeout(() => {
//         console.log("Bought Royal Enfield Himalayan");
//         planTrip();
//     }, 2000);
// }

//2
function buyBike(x) {
    setTimeout(() => {
        console.log("Bought Royal Enfield Himalayan");
        x();
    }, 2000);
}

function planTrip() {
    setTimeout(() => {
        console.log("Trip to Ladakh planned");
    }, 1000);
}

// Use buyBike as a callback for planTrip
buyBike(planTrip);