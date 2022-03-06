/** 
 * @abstract --- Explicit Types ---
 */

let name: string;
let nationality: string;
let haight: number;           // meters
let weight: number | string;           // kilograms  
let readyForLunch: boolean;

name = 'Astrolux'
nationality = 'German'
haight = 70
weight = 30000
readyForLunch = true

readyForLunch = 'false' // <--- Throws error


/**
 * @abstract --- TS Function Basics ---
 * 
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


// --------------------------------

type dogObj = { name: string, age: number }

function getPhrase(object: dogObj) {
  return 'The dog named ' + object.name + ' is ' + object.age + ' old'
}

let dog = {
  name: 'max',
  age: 6
}

// -------------------------------





// -------------------------------

let calc: (a: number, b: number, action: string) => number | undefined;

calc = (a, b, action) => {
  if (action === 'sum') return a + b
  else if (action === 'multiply') return a * b
  else if (action === 'divide') return a / b
  else if (action === 'remainder') return a % b
}


// -------------------------------

const divElement = document.getElementById('root') as HTMLDivElement


// ------------------------------

import { Rainbow } from './classes/rainbow.js'

let rainbows: any = []

// Populate rainbows[]
for (let i = 0; i < 5; i++) {
  rainbows = [new Rainbow(), ...rainbows]
}

rainbows.forEach((rainbow: any) => {
  console.log(rainbow.lifeSpan)
})

// ------- Interfaces #16 ----------------------

interface dogInterface {
  name: string
  age: number
  isAngry: boolean
  getAngry(): void
  chill(): void
  roar(): void
}

let lion = {
  name: 'Choki',
  age: 7,
  isAngry: false,
  getAngry() { this.isAngry = true },
  chill() { this.isAngry = false },
  roar() { console.log('Grrrrr!!') }
}

async function boderLion() {
  return lion.getAngry()
}

setTimeout(() => {
  console.log('Im going to boder the lion...')

  setTimeout(() => {
    console.log('The lion god mad...')
  }, 1000)

  setTimeout(() => {
    lion.roar()
  }, 3000)

  setTimeout(() => {
    boderLion().then(
      function () {
        if (lion.isAngry)
          console.log('Is the lion angry? ')
        lion.roar()
      }
    )
  }, 5000)

  setTimeout(() => {
    if (lion.isAngry) console.log('Well... yea, what did you expect? are you stupid or what?')
  }, 7000)

  setTimeout(() => {
    async function chillLion() {
      lion.chill()
    }

    chillLion().then(
      function () { console.log('Is the lion still angry? ') }
    )
  }, 10000)

  setTimeout(() => {
    if (!lion.isAngry) { console.log('No.. He is now chill') }
  }, 14000)

}, 1000)

// ----------- Generics #18 -------------

/** 
 * @abstract
 * - In this case <T> captures the properties passed in to the function 
 * - 'extends object' means that if a non object (example: addUID(34)) 
 * is passed as an argument to the function it will throw an error.
 * 
 * */

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
 * @abstract
 * <T extends object> can be more specific by replacing the object with types
 * 
 * Example: <T extends {name: string, age: number}>
 * 
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


// --------- Tuples #20 --------------

let values: [number, string, boolean]

values = [23, 'some text', false]

// values = ['some text', 34, 23]   // <--- wavy underline




