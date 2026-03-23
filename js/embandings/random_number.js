//max=100;min=1;

num= (min, max) => {
    return Math.floor(Math.random()* (max - min + 1)) + min;
};
console.log(num(1, 100));