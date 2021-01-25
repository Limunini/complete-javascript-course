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


console.log("CODING CHALLENGE 1");

 CODING CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.


// Test Data 1:
let weightMark = 78;
let heightMark = 1.69;

let weightJohn = 92;
let heightJohn = 1.95;

const bmiMark = weightMark / heightMark ** 2;
console.log(bmiMark);

const bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// Test Data 2:
weightMark = 95;
heightMark = 1.88;

weightJohn = 85;
heightJohn = 1.76;

const bmiMark2 = weightMark / heightMark ** 2;
console.log(bmiMark2);

const bmiJohn2 = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn2);

const markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(markHigherBMI2);



console.log("ASSIGNMENT 17");
//Strings and Template Literals

const country = 'Portugal';
const continent = 'Europe';
const population = 11;
const language = 'portuguese';

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);


console.log("ASSIGNMENT 18");
//Decisions: If/else statements

const populationSA = 80

if(populationSA > 33) {
    console.log(`Portugal's population is above average.`);
} else {
    console.log(`Portugal's population is 22 million below average`);
}


console.log("CODING CHALLENGE 2");

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement

// Test Data 1:
let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiMark,bmiJohn)

if(bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`);
} else {
    console.log(`Mark's BMI (${bmiMark}) is lower than John's BMI (${bmiJohn})`);
}

// Test Data 2:
weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

const bmiMark2 = weightMark / heightMark ** 2;
const bmiJohn2 = weightJohn / (heightJohn * heightJohn);
console.log(bmiMark2,bmiJohn2)

if(bmiMark2 > bmiJohn2) {
    console.log(`Mark's BMI (${bmiMark2}) is higher than John's BMI (${bmiJohn2})`);
} else {
    console.log(`Mark's BMI (${bmiMark2}) is lower than John's BMI (${bmiJohn2})`);
}


console.log("ASSIGNMENT 20");
//Type conversion and coercion

let n;

n = '9' - '5'; //4
console.log(n);

n = '19' - '13' + '17'; //617
console.log(n);

n = '19' - '13' + 17;  //23
console.log(n);

n = '123' < 57;  //true
console.log(n);

n = 5 + 6 + '4' + 9 - 4 - 2; //5643
console.log(n);


console.log("ASSIGNMENT 22");
//Equality Operators == vs ===

const numNeighbours = Number(prompt(`How many neighbouring countries does your country have?`));

if(numNeighbours === 1) {
    console.log(`Only 1 border!`);
} else if(numNeighbours > 1) {
    console.log(`More than 1 border!`);
} else {
    console.log(`No borders!`);
}



console.log("ASSIGNMENT 24");
//Logical Operators
const country = 'South Africa';
const language = 'Afrikaans';
const population = 80;
const isIsland = false

//Sarah's needs
// const population = 50;
// const languageEnglish = true;
// const  isIsland = false


if(language === 'English' && population < 50 && !isIsland) {
    console.log(`Sarah should live in ${country}!`)
} else {
    console.log(`Sarah should live in Portugal!`)
}
*/

console.log("CODING CHALLENGE 3");

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/

//DATA 1:
let d1 = 96
let d2 = 108
let d3 = 89

let k1 = 88
let k2 = 91
let k3 = 110

// QUESTION 1
console.log(`Question 1`)

let davg = (d1 + d2 + d3)/3
console.log(`Dolphin average is ${davg}.`)
let kavg = (k1 + k2 + k3)/3
console.log(`Koala average is ${kavg}.`)

// QUESTION 2
console.log(`Question 2`)
if(davg > kavg) {
    console.log(`Dolphins win!`);
} else if(davg < kavg) {
    console.log(`Koalas win!`);
} else {
    console.log(`It's a draw...`);
}

// BONUS 1
//DATA:
d1 = 97
d2 = 112
d3 = 101

k1 = 109
k2 = 95
k3 = 123

console.log(`Bonus 1`)
davg = (d1 + d2 + d3)/3
console.log(`Dolphin average is ${davg}.`)
kavg = (k1 + k2 + k3)/3
console.log(`Koala average is ${kavg}.`)


if(davg > kavg && davg >= 100) {
    console.log(`Dolphins win!`);
} else if(davg > kavg && davg < 100) {
    console.log(`Dolphins have the highest score, but it is less than 100...`);
} else if(davg < kavg && kavg >= 100) {
    console.log(`Koalas win!`);
} else if(davg < kavg && kavg < 100) {
    console.log(`Koalas have the highest score, but it is less than 100...`);
} else if(davg === kavg ) {
    console.log(`It's a draw!`);
} else {
    console.log(`Something else?`);
}


// BONUS 2
//DATA:
d1 = 97
d2 = 112
d3 = 101

k1 = 109
k2 = 95
k3 = 106

console.log(`Bonus 2`)
davg = (d1 + d2 + d3)/3
console.log(`Dolphin average is ${davg}.`)
kavg = (k1 + k2 + k3)/3
console.log(`Koala average is ${kavg}.`)


if(davg > kavg && davg >= 100) {
    console.log(`Dolphins win!`);
} else if(davg > kavg && davg < 100) {
    console.log(`Dolphins have the highest score, but it is less than 100...`);
} else if(davg < kavg && kavg >= 100) {
    console.log(`Koalas win!`);
} else if(davg < kavg && kavg < 100) {
    console.log(`Koalas have the highest score, but it is less than 100...`);
} else if(davg === kavg && kavg >= 100) {
    console.log(`Both teams win!`);
} else if(davg === kavg && kavg < 100) {
    console.log(`Both teams lose...`);
} else {
    console.log(`Something else?`);
}