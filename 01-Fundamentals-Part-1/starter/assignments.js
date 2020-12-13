/*
console.log("ASSIGNMENT 10");
//VARIABLES
let country = "South Africa"
let continent = "Africa"
let population = 80

console.log(country)
console.log(continent)
console.log(population)

console.log("ASSIGNMENT 12");
//DATA TYPES
let isIsland = false;
let language;

console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

language = "Afrikaans";

console.log(language);
console.log(typeof language);

console.log("ASSIGNMENT 13");
//let, const and var
const language = 'Afrikaans';

const continent = 'Africa';
const country = 'South Africa';
let population = 80;

country = 'Finland';
*/

console.log("ASSIGNMENT 14");
//Basic Operators
const language = 'Afrikaans';
const continent = 'Africa';
const country = 'South Africa';

let population = 80;

population /= 2
console.log(population)

population ++;
console.log(population)

const populationSA = 80;
const populationFinland = 6;

let isItSmaller = populationSA < populationFinland;
let isItBigger = populationSA > populationFinland;
console.log(isItSmaller, isItBigger);

const populationAverage = 33;
isItSmaller = populationSA < populationAverage;
console.log(isItSmaller);

const descriptionFirst = 'Portugal is in Europe,';
const descriptionSecond = 'and its 11 million people speak portuguese.';
const description = descriptionFirst + ' ' + descriptionSecond;
console.log(description);