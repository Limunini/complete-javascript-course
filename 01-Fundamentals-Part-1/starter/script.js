/*
console.log("LECTURE 10");
//VARIABLES
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Bob";
console.log(firstName);
//console.log(firstName);
//console.log(firstName);

// Variable name Conventions

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/
/*
console.log("LECTURE 12");
//DATA TYPES
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
console.log(typeof "Jonas");

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2020;
console.log(year);
console.log(typeof year)

//JS bug
console.log(typeof null)


console.log("LECTURE 13");
//let, const and var
let age = 30;
age = 31;
age;

const birthYear = 1995
//birthYear = 1996
//const job;

var job = 'programmer';
job = 'teacher';

//Need to declare variable?
lastName = 'Schmedtman';
console.log(lastName);
//^Bad Practice, need to declare it (future chapter)


console.log("LECTURE 14");
//Basic Operators

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas*2, ageJonas/10, 2 ** 3);
// 2 ** 3 means 3 to the power of 2 is 2 * 2 * 2

const firstName = 'Jonas';
const lastName= 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5;  // 15
x += 10;  // x = x + 10 = 25
x *= 4;  // x = x * 4 = 100
x ++;  // x = x + 1 = 101
x --;
x --;  // x = 99
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);  // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


console.log("LECTURE 15");
//Basic Precedence
//Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5;  // x = y = 10
console.log(x,y);

const averageAge =  (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


console.log("LECTURE 17");
//Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2037;

const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string....`);

console.log('String with \n\
multiple \n\ lines')

console.log(`String with
multiple
lines`);



console.log("LECTURE 18");
//Decisions: If/else statements

const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license!');
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

let century
const birthYear = 2012;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/