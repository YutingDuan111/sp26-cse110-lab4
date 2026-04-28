
let statistics = {
    redcars: 21,
    blueCars: 45,
    greenCars: 12,
    racecars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let key in statistics) {
    if (key[0] === 'r' || statistics[key] % 2 === 1) {
        console.log(statistics[key]);
    }
}