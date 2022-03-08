
/** 
 * ------------------------------------
 *         Explicit Types
 * ------------------------------------
 */

let rocketName: string;
let nationality: string;
let haight: number;                    // meters
let weight: number | string;           // kilograms  
let readyForLunch: boolean;

rocketName = 'Astrolux'
nationality = 'German'
haight = 70
weight = 30000
readyForLunch = true

readyForLunch = 'false' // <--- shows error


/** 
 * --------------------------------------
 *          TS Function Basics
 * --------------------------------------
 */


// --- EXAMPLE 1 ---

let add: Function;

/* if a 'c' parameter is not passed to the function it will
 use 2 as the default value */
add = (a: number, b: number, c: number = 2) => {
  return a + b + c
}

console.log(add(2, 3))   // <--- outputs: 7


// --- EXAMPLE 2 ---

let remainder: Function;

// Explicitly show that this function returns a number
remainder = (a: number, b: number): number => {
  return a % b
}


// --- EXAMPLE 3 ---

// Explicitly show that function is void
let greet: (a: string, b: string) => void;

greet = (a, b) => console.log(`${a} ${b}`)



/** 
 * ---------------------------------------------------
 *       Type Aliases and Function Signatures
 * ---------------------------------------------------
 */


// --- EXAMPLE 1 ---

type dogObjType = { name: string, age: number }

function consolePhrase(object: dogObjType) {
  console.log('The dog named ' + object.name + ' is ' + object.age + ' years old')
}

let dog = {
  name: 'max',
  age: 6
}

consolePhrase(dog)

// --- EXAMPLE 2 ---

type carObjectType = {
  brand: string,
  model: string,
  year: number
}

let carOne = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2005
}

function consoleCarInfo(car: carObjectType): void {
  console.log(`${car.brand} ${car.model} ${car.year}`)
}

consoleCarInfo(carOne)


// --- EXAMPLE 3 ---

type tennisPlayerType = {
  name: string,
  age: number,
  ranking: number,
  competing: boolean
}

let tennisPlayer = {
  name: 'Alexander',
  age: 26,
  ranking: 34,
  competing: true
}

/* getRanking() receives a player object of tennisPlayerType and
   returns a number */

let getRanking: (player: tennisPlayerType) => number;

getRanking = (player) => {
  return player.ranking
}

/*** It can ALSO be written like this: 

let getRanking: Function;

getRanking = (player: tennisPlayerType): number => {
  return player.ranking
}

****/

console.log(`Ranking: ${getRanking(tennisPlayer)}`)

// --- Example 4 ---

let calc: (a: number, b: number, action: string) => number | undefined;

calc = (a, b, action) => {
  if (action === 'sum') return a + b
  else if (action === 'multiply') return a * b
  else if (action === 'divide') return a / b
  else if (action === 'remainder') return a % b
}

/** 
 * --------------------------------------
 *       The DOM and Type Casting
 * --------------------------------------
 */


const divElement = document.getElementById('root') as HTMLDivElement

/**
 * @abstract --- Interfaces ---
 */

interface dogInterface {
  name: string;
  age: number;
  isAngry: boolean;
  getAngry(): void;
  chill(): void;
  roar(): void;
}

let lion = {
  name: 'Choki',
  age: 7,
  isAngry: false,
  getAngry() { this.isAngry = true },
  chill() { this.isAngry = false },
  roar() { console.log('Grrrrr!!') }
}

function boderLion() {
  return lion.getAngry()
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

function addUID<T extends object>(obj: T) {
  let UID = Math.floor(Math.random() * 100)
  return {
    ...obj,
    id: UID
  }
}

let newPersonObj = addUID({ name: 'Gabriel', age: 33 })

// let newPersonObj2 = addUID(34)   <-- this will show an error


/**
 * <T extends object> can be more specific by replacing the object with types
 * Example: <T extends {name: string, age: number}>
 */

interface objType {
  name: string;
  age: number;
}

function addScore<T extends objType>(obj: T) {
  let score = Math.floor(Math.random() * 100)
  return {
    ...obj,
    score: score
  }
}

let newObj = addScore({ name: 'Gass', age: 23 })

console.log(newObj)


/* Another example of Generics */

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;               // <-- 'T' is an object type 
}

const docThree: Resource<object> = {     // <--- It is specified that <T> is an object type
  uid: 1,
  resourceName: 'person',
  data: { name: 'shaun' }
}


/** 
 * ------------------
 *       Tuples
 * ------------------ 
 */

let values: [number, string, boolean]

values = [23, 'some text', false]

// values = ['some text', 34, 23]   // <--- shows error




