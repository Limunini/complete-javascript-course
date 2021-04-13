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
 */

console.log('CODING CHALLENGE 1')

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3
//Test Data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

function checkWinner( avgDolphins, avgKoalas){
    if (avgDolphins > avgKoalas*2) {
        return (`Dolphins win! (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas > avgDolphins*2) {
        return (`Koalas win! (${avgDolphins} vs ${avgKoalas})`)
    } else {
        return (`No one wins! (${avgKoalas} vs ${avgDolphins})`)
    }
}
console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas));

//Test Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas));
