
/** 
 * ------------------------------------
 *         Explicit Types
 * ------------------------------------
 */

let rocketName: string;
let nationality: string;
let height: number;                    // meters
let weight: number | string;           // kilograms  
let readyForLunch: boolean;

rocketName = 'Astrolux'
nationality = 'German'
height = 70
weight = 30000
readyForLunch = true

readyForLunch = 'false' // <--- shows error


/* 
--- arrays and union types 
*/

const turtleNames: string[] = ['steve', 'mario']

// equivalent
const turtleNames_2: Array<string> = ['steve', 'mario']

const randomThings: Array<any> = [2, 'mario']

// union types
const randomStuff: (string|number)[] = [2, 'a table']

// equivalent 
const randomeStuff_2: Array<string|number> = [2, 'a table']



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

// Explicitly show that this function returns a number
const remainder: Function = (a: number, b: number): number => {
  return a % b
}

// The same function written in a different way
function remainder_2(a:number, b:number):number{
  return a % b
}

// --- EXAMPLE 3 ---

// Explicitly show that function is void
let greet: (a: string, b: string) => void;

greet = (a, b) => console.log(`${a} ${b}`)

// equivalent to 
function greet_2(a:string,b:string):void{
  console.log(`${a} ${b}`)
}


/** 
 * ---------------------------------------------------
 *       Type Aliases and Function Signatures
 * ---------------------------------------------------
 */


// --- EXAMPLE 1 ---

type Dog = { name: string, age: number }

function consolePhrase(dog:Dog):void {
  console.log('The dog named ' + dog.name + ' is ' + dog.age + ' years old')
}

// equivalent to
let consolePhrase_2: (dog:Dog) => void;

consolePhrase_2 = (dog) => {
  console.log('The dog named ' + dog.name + ' is ' + dog.age + ' years old')
}

let dog = {
  name: 'max',
  age: 6
}

consolePhrase(dog)

// --- EXAMPLE 2 ---

type Car = {
  brand: string,
  model: string,
  year: number
}

let carOne = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2005
}

function consoleCarInfo(car: Car): void {
  console.log(`${car.brand} ${car.model} ${car.year}`)
}

// equivalent to 
let carInfo: (car:Car) => void = (car) => {
  console.log(`${car.brand} ${car.model} ${car.year}`)
}

carInfo(carOne)

// --- EXAMPLE 3 ---

type tennisPlayer = {
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

let getRanking: (player: tennisPlayer) => number;

getRanking = (player) => {
  return player.ranking
}

// equivalent to
let getRanking_2: Function;

getRanking_2 = (player: tennisPlayer): number => {
  return player.ranking
}

// equivalent to 
function getRanking_3(player: tennisPlayer):number{
  return player.ranking
}

console.log(`Ranking: ${getRanking(tennisPlayer)}`)

// --- Example 4 ---
type A = 'sum' | 'multiply' | 'divide' | 'remainder'
type R = number | undefined

let calc: (a: number, b: number, action: A) => R;

calc = (a, b, action) => {
  if (action === 'sum') return a + b
  else if (action === 'multiply') return a * b
  else if (action === 'divide') return a / b
  else if (action === 'remainder') return a % b
}

// equivalent to
function calc_2(a:number, b:number, action:A):R{
  switch(action){
    case 'sum': return a+b
    case 'multiply': return a*b
    case 'divide': return a/b
    case 'remainder': return a%b
  }
}

/** 
 * --------------------------------------
 *       The DOM and Type Casting
 * --------------------------------------
 */

const divElement = document.getElementById('root') as HTMLDivElement

/**
 * --- Interfaces ---
 */

interface dogInterface {
  name: string;
  age: number;
  isAngry: boolean;
  getAngry(): void;
  chill(): void;
  roar(): void;
}

let lion: dogInterface = {
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
 * - In this case <T> captures the properties passed into the function 
 * - 'extends object' means that if a non object (example: addUID(34)) 
 * is passed as an argument to the function it will throw an error. This
 * is because it expects an object.
 */

function addUID<T extends object>(obj: T):object {
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

interface User {
  name: string;
  age: number;
}

// the following f() expects an object with a User interface

function addScore<T extends User>(obj: T):object {
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




/** 
 * ------------------
 *      Enum
 * ------------------ 
 * enums are read only properties. If you don't assign a value
 * to them, they will automaticaly assign one and it will be a number.
 * (by default they will be indexes) If one of those enums are assigned
 * a value, the indexes will sum up starting from that number.
 */

enum JacketPrices{
  one = 30000,
  two = 40000,
  three = 20000
}

// equivalent to 
const jacketPrices_2 = {
  one:30000,
  two:40000,
  three:20000
} as const

// the following throws error because enums are like const, they are read-only
JacketPrices.one = 200 

// equivalent to 
jacketPrices_2.one = 200 // throws error because the props are const (read-only)



type Jacket = 'one' | 'two' | 'three'

function getPrice(jacket:Jacket):number | undefined{
  switch(jacket){
    case 'one': return JacketPrices.one
    case 'two': return JacketPrices.two
    case 'three': return JacketPrices.three
  }
}


