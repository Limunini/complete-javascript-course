'use strict';
/*  
console.log('FUNCTIONS')
// lecture 33

function describeCountry(country, population, capitolCity) {
    let countryString = (`${country} has ${population} million people and its capitol city is ${capitolCity}.`)
    return countryString
}

const SouthAfrica = describeCountry('South Africa', 80, 'Johannesburg');

const Finland = describeCountry('Finland', 6, 'Helsinki');

const England = describeCountry('England', 56, 'London');

console.log(SouthAfrica);
console.log(Finland);
console.log(England);



console.log('FUNCTION DECLARATION VS EXPRESSIONS')
// Lecture 34

  //  Function Declaration
function percentageOfWorld1(population) {
    const percentagePop = (population/7900)*100;
    return percentagePop;
}
const SouthAfricaPop1 = percentageOfWorld1(80);
const FinlandPop1 = percentageOfWorld1(6);
const ChinaPop1 = percentageOfWorld1(1441);

console.log(SouthAfricaPop1, FinlandPop1, ChinaPop1)

  //  Function Expression
  const percentageOfWorld2 = function(population) {
    const percentagePop2 = (population/7900)*100;
    return percentagePop2
  }
  const SouthAfricaPop2 = percentageOfWorld2(80);
  const FinlandPop2 = percentageOfWorld2(6);
  const ChinaPop2 = percentageOfWorld2(1441);
  
  console.log(SouthAfricaPop2, FinlandPop2, ChinaPop2);

 
console.log('ARROW FUNCTIONS')
// Lecture 35

const percentageOfWorld3 = populationWorld => (populationWorld/7900)*100;

const SouthAfricaPop3 = percentageOfWorld3(80);
const FinlandPop3 = percentageOfWorld3(6);
const ChinaPop3 = percentageOfWorld3(1441);

console.log(SouthAfricaPop3, FinlandPop3, ChinaPop3);


console.log('FUNCTIONS CALLING OTHER FUNCTIONS')
// Lecture 36

const percentageOfWorld3 = populationWorld => (populationWorld/7900)*100;

function describePopulation(country, population) {
    const popPercentage = percentageOfWorld3(population)
    const stringReturned = `${country} has ${population} million people which is ${popPercentage}% of the world.`
    return stringReturned
}

const SouthAfricaPop4 = describePopulation('South Africa', 80);
const FinlandPop4 = describePopulation('Finland', 6);
const ChinaPop4 = describePopulation('China', 1441);

console.log(SouthAfricaPop4);
console.log(FinlandPop4);
console.log(ChinaPop4);


console.log('CODING CHALLENGE 1')

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �

let avgDolphins
let avgKoalas
const calcAverage = (a, b, c) => (a + b + c)/3;

function checkWinner( avgDolphins, avgKoalas){
    if (avgDolphins >= avgKoalas*2) {
        return (`Dolphins win! (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins*2) {
        return (`Koalas win! (${avgDolphins} vs ${avgKoalas})`)
    } else {
        return (`No one wins... (${avgKoalas} vs ${avgDolphins})`)
    }
}

//Test Data 1
avgDolphins = calcAverage(44, 23, 71);
avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas));

//Test Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas));




console.log('ARRAYS')
// Lecture 39 - Intro

const SAPop = 80;
const FinPop = 6;
const ChinaPop = 1441;
const UKPop = 58;

const population = new Array(SAPop, FinPop, ChinaPop, UKPop);
console.log(population);

if (population.length === 4) {
    console.log(true)
} else {
    console.log(false)
}

const percentageOfWorld = populationCountry => (populationCountry/7900)*100;

const percentages = [percentageOfWorld(SAPop), percentageOfWorld(FinPop), percentageOfWorld(ChinaPop), percentageOfWorld(UKPop)]
console.log(percentages);


// Lecture 40 - Methods

const neighbours = ['Namibia', 'Botswana', 'Zimbabwe'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D')
} else {
    console.log('Definitely in Europe');
}

neighbours[neighbours.indexOf('Zimbabwe')] = 'Zimbabweeee';
console.log(neighbours);
*/