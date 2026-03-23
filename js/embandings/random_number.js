//max=100;min=1;

let getRandom= (min, max) => {
    return Math.floor(Math.random()* (max - min + 1)) + min;
};

//window.getRandom = getRandom;

//console.log(num(1, 100));