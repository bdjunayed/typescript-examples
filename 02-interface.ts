interface carInterface{
    door: number;
    gear: string;
}

function carDetails(car: carInterface): void {
    console.log("Doors: "+car.door+", gear: "+car.gear);
}

var allion = {
    door: 4,
    gear: "manual"
}

carDetails(allion);