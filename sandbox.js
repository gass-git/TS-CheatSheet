var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function add(a, b, c = 2) {
    return a + b + c;
}
function getPhrase(object) {
    return 'The dog named ' + object.name + ' is ' + object.age + ' old';
}
let dog = {
    name: 'max',
    age: 6
};
// -------------------------------
let greet;
greet = (a, b) => {
    console.log(`${a} ${b}`);
};
greet('fuck', '!');
// -------------------------------
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
// -------------------------------
const divElement = document.getElementById('root');
// ------------------------------
import { Rainbow } from './classes/rainbow.js';
let rainbows = [];
// Populate rainbows[]
for (let i = 0; i < 5; i++) {
    rainbows = [new Rainbow(), ...rainbows];
}
rainbows.forEach((rainbow) => {
    console.log(rainbow.lifeSpan);
});
let lion = {
    name: 'Choki',
    age: 7,
    isAngry: false,
    getAngry() { this.isAngry = true; },
    chill() { this.isAngry = false; },
    roar() { console.log('Grrrrr!!'); }
};
function boderLion() {
    return __awaiter(this, void 0, void 0, function* () {
        return lion.getAngry();
    });
}
setTimeout(() => {
    console.log('Im going to boder the lion...');
    setTimeout(() => {
        console.log('The lion god mad...');
    }, 1000);
    setTimeout(() => {
        lion.roar();
    }, 3000);
    setTimeout(() => {
        boderLion().then(function () {
            if (lion.isAngry)
                console.log('Is the lion angry? ');
            lion.roar();
        });
    }, 5000);
    setTimeout(() => {
        if (lion.isAngry)
            console.log('Well... yea, what did you expect? are you stupid or what?');
    }, 7000);
    setTimeout(() => {
        function chillLion() {
            return __awaiter(this, void 0, void 0, function* () {
                lion.chill();
            });
        }
        chillLion().then(function () { console.log('Is the lion still angry? '); });
    }, 10000);
    setTimeout(() => {
        if (!lion.isAngry) {
            console.log('No.. He is now chill');
        }
    }, 14000);
}, 1000);
// ----------- Generics #18 -------------
/**
 * @abstract
 * - In this case <T> captures the properties passed in to the function
 * - 'extends object' means that if a non object (example: addUID(34))
 * is passed as an argument to the function it will throw an error.
 *
 * */
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
