//fun passes as an arg to other func
function buyBike(callback) {
    setTimeout(() => {
        console.log("Bought Royal Enfield Himalayan");
        callback();
    }, 2000);
}

function planTrip() {
    setTimeout(() => {
        console.log("Trip to Ladakh planned");
    }, 1000);
}

// Use buyBike as a callback for planTrip
buyBike(planTrip);