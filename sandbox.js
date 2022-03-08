"use strict";
/**
 * ------------------------------------
 *         Explicit Types
 * ------------------------------------
 */
let rocketName;
let nationality;
let haight; // meters
let weight; // kilograms  
let readyForLunch;
rocketName = 'Astrolux';
nationality = 'German';
haight = 70;
weight = 30000;
readyForLunch = true;
readyForLunch = 'false'; // <--- shows error
/**
 * --------------------------------------
 *          TS Function Basics
 * --------------------------------------
 */
// --- EXAMPLE 1 ---
let add;
/* if a 'c' parameter is not passed to the function it will
 use 2 as the default value */
add = (a, b, c = 2) => {
    return a + b + c;
};
console.log(add(2, 3)); // <--- outputs: 7
// --- EXAMPLE 2 ---
let remainder;
// Explicitly show that this function returns a number
remainder = (a, b) => {
    return a % b;
};
// --- EXAMPLE 3 ---
// Explicitly show that function is void
let greet;
greet = (a, b) => console.log(`${a} ${b}`);
function consolePhrase(object) {
    console.log('The dog named ' + object.name + ' is ' + object.age + ' years old');
}
let dog = {
    name: 'max',
    age: 6
};
consolePhrase(dog);
let carOne = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2005
};
function consoleCarInfo(car) {
    console.log(`${car.brand} ${car.model} ${car.year}`);
}
consoleCarInfo(carOne);
let tennisPlayer = {
    name: 'Alexander',
    age: 26,
    ranking: 34,
    competing: true
};
/* getRanking() receives a player object of tennisPlayerType and
   returns a number */
let getRanking;
getRanking = (player) => {
    return player.ranking;
};
/*** It can ALSO be written like this:

let getRanking: Function;

getRanking = (player: tennisPlayerType): number => {
  return player.ranking
}

****/
console.log(`Ranking: ${getRanking(tennisPlayer)}`);
// --- Example 4 ---
let calc;
calc = (a, b, action) => {
    if (action === 'sum')
        return a + b;
    else if (action === 'multiply')
        return a * b;
    else if (action === 'divide')
        return a / b;
    else if (action === 'remainder')
        return a % b;
};
/**
 * --------------------------------------
 *       The DOM and Type Casting
 * --------------------------------------
 */
const divElement = document.getElementById('root');
let lion = {
    name: 'Choki',
    age: 7,
    isAngry: false,
    getAngry() { this.isAngry = true; },
    chill() { this.isAngry = false; },
    roar() { console.log('Grrrrr!!'); }
};
function boderLion() {
    return lion.getAngry();
}
/**
 * ------------------
 *     Generics
 * ------------------
 *
 * - In this case <T> captures the properties passed in to the function
 * - 'extends object' means that if a non object (example: addUID(34))
 * is passed as an argument to the function it will throw an error.
 *
 */
function addUID(obj) {
    let UID = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id: UID });
}
let newPersonObj = addUID({ name: 'Gabriel', age: 33 });
function addScore(obj) {
    let score = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { score: score });
}
let newObj = addScore({ name: 'Gass', age: 23 });
console.log(newObj);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
/**
 * ------------------
 *       Tuples
 * ------------------
 */
let values;
values = [23, 'some text', false];
// values = ['some text', 34, 23]   // <--- shows error
